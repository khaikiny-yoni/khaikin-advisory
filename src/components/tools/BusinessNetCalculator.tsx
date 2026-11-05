import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';
import { ROUTE_PATHS } from '@/lib/index';
import { Disclaimer, RangeField, Segmented, money } from './shared';

/* 2026 parameters (monthly) – see disclaimer. */
const BRACKETS: [number, number][] = [
  [7010, 0.1],
  [10060, 0.14],
  [19000, 0.2],
  [25100, 0.31],
  [46690, 0.35],
  [60130, 0.47],
  [Infinity, 0.5],
];
const CREDIT_POINT = 242;
const VAT = 0.18;
const EXEMPT_CEILING_YEAR = 122833;
const BL_REDUCED_LIMIT = 7703;
const BL_MIN_BASE = 3442;
const BL_MAX_BASE = 51910;
const BL = { reduced: 0.0447, full: 0.1283 };
const HEALTH = { reduced: 0.0323, full: 0.0517 };

export type DealerType = 'licensed' | 'small' | 'exempt';

export function computeNet(revenue: number, expenses: number, type: DealerType, points: number) {
  const profit = revenue - expenses;
  const vat = type === 'licensed' ? revenue * VAT : 0;

  const base = profit > 0 ? Math.min(BL_MAX_BASE, Math.max(BL_MIN_BASE, profit)) : 0;
  const red = Math.min(base, BL_REDUCED_LIMIT);
  const full = Math.max(0, base - BL_REDUCED_LIMIT);
  const bl = red * BL.reduced + full * BL.full;
  const health = red * HEALTH.reduced + full * HEALTH.full;

  const taxable = Math.max(0, profit - 0.52 * bl);
  let tax = 0;
  let prev = 0;
  for (const [cap, rate] of BRACKETS) {
    if (taxable > prev) tax += (Math.min(taxable, cap) - prev) * rate;
    prev = cap;
  }
  tax = Math.max(0, tax - points * CREDIT_POINT);

  const net = profit - tax - bl - health;
  return { profit, vat, bl, health, tax, net, cashIn: revenue + vat, overCeiling: type !== 'licensed' && revenue * 12 > EXEMPT_CEILING_YEAR };
}

export function BusinessNetCalculator() {
  const [type, setType] = useState<DealerType>('licensed');
  const [revenue, setRevenue] = useState(30000);
  const [expenses, setExpenses] = useState(8000);
  const [points, setPoints] = useState(2.25);

  const r = useMemo(() => computeNet(revenue, expenses, type, points), [revenue, expenses, type, points]);
  const parts = [
    { key: 'vat', label: 'מע"מ (שייך למדינה)', value: r.vat, color: '#6b7c99' },
    { key: 'exp', label: 'הוצאות העסק', value: expenses, color: '#c9a961' },
    { key: 'tax', label: 'מס הכנסה', value: r.tax, color: '#b3412f' },
    { key: 'bl', label: 'ביטוח לאומי ובריאות', value: r.bl + r.health, color: '#3bb0c4' },
    { key: 'net', label: 'הנטו שלך', value: Math.max(0, r.net), color: '#ffffff' },
  ].filter((p) => p.value > 0);
  const total = parts.reduce((s, p) => s + p.value, 0) || 1;
  const takeHomePct = r.cashIn > 0 ? Math.max(0, (r.net / r.cashIn) * 100) : 0;

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_1.15fr]">
      <div className="space-y-8">
        <div>
          <p className="mb-3 text-sm font-semibold text-navy">סוג העסק</p>
          <Segmented<DealerType>
            label="סוג עוסק"
            value={type}
            onChange={setType}
            options={[
              { value: 'licensed', label: 'עוסק מורשה' },
              { value: 'small', label: 'עוסק זעיר' },
              { value: 'exempt', label: 'עוסק פטור' },
            ]}
          />
        </div>
        <RangeField label="הכנסות חודשיות (לפני מע&quot;מ)" value={revenue} min={3000} max={150000} step={500} onChange={setRevenue} format={money} />
        <RangeField label="הוצאות חודשיות מוכרות" value={expenses} min={0} max={Math.max(revenue, 3000)} step={500} onChange={(v) => setExpenses(Math.min(v, revenue))} format={money} />
        <div>
          <p className="mb-3 text-sm font-semibold text-navy">נקודות זיכוי במס</p>
          <Segmented<number>
            label="נקודות זיכוי"
            value={points}
            onChange={setPoints}
            options={[
              { value: 2.25, label: '2.25 (גבר תושב)' },
              { value: 2.75, label: '2.75 (אישה תושבת)' },
              { value: 0, label: 'ללא' },
            ]}
          />
        </div>
        {r.overCeiling && (
          <div className="flex gap-3 rounded-2xl border border-gold/50 bg-gold/10 p-4 text-sm text-navy" role="alert">
            <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
            <p>המחזור השנתי ({money(revenue * 12)}) גבוה מתקרת הפטור ממע"מ ({money(EXEMPT_CEILING_YEAR)} ב-2026). ייתכן שנדרש מעבר לעוסק מורשה.</p>
          </div>
        )}
      </div>

      <div className="rounded-3xl bg-navy p-6 text-ivory md:p-8">
        <p className="text-sm text-ivory/60">הנטו שאפשר לקחת הביתה מהעסק, בחודש</p>
        <p className="font-display text-5xl font-black num md:text-6xl">{money(Math.max(0, r.net))}</p>
        <p className="mt-2 text-sm text-ivory/60">
          כ-<span className="num font-bold text-gold">{Math.round(takeHomePct)}%</span> מהכסף שנכנס לחשבון העסק · בשנה: <span className="num">{money(Math.max(0, r.net) * 12)}</span>
        </p>

        <div className="mt-7 flex h-4 overflow-hidden rounded-full bg-white/10" role="img" aria-label="פירוט הכסף שנכנס לחשבון העסק">
          {parts.map((p) => (
            <div key={p.key} className="h-full transition-all duration-500" style={{ width: `${(p.value / total) * 100}%`, background: p.color }} />
          ))}
        </div>

        <ul className="mt-5 space-y-3 text-sm">
          <li className="flex justify-between text-ivory/60">
            <span>כסף שנכנס לחשבון העסק</span>
            <span className="num">{money(r.cashIn)}</span>
          </li>
          {parts.map((p) => (
            <li key={p.key} className="flex items-center justify-between gap-3">
              <span className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full" style={{ background: p.color }} />
                {p.label}
              </span>
              <span className={`num font-semibold ${p.key === 'net' ? 'text-white' : 'text-ivory/80'}`}>
                {p.key === 'net' ? '' : '−'}
                {money(p.value)}
              </span>
            </li>
          ))}
        </ul>
        {r.net < 0 && <p className="mt-4 text-sm text-gold">ההוצאות גבוהות מההכנסות: העסק אינו רווחי בתרחיש הזה.</p>}
      </div>

      <div className="lg:col-span-2">
        <Disclaimer>
          הערכה להמחשה בלבד לפי נתוני 2026: מדרגות מס הכנסה, שווי נקודת זיכוי ({CREDIT_POINT} ₪), ושיעורי ביטוח לאומי ובריאות לעצמאים. לא כולל הפרשות לפנסיה וקרן השתלמות, ניכויים נוספים, מס יסף ומקדמות. אינו מהווה ייעוץ מס. המערכת המלאה מחשבת לפי הנתונים בפועל של העסק.{' '}
          <Link to={ROUTE_PATHS.SYSTEMS} className="font-semibold text-teal underline underline-offset-4">
            למערכת "הנטו שלי"
          </Link>
        </Disclaimer>
      </div>
    </div>
  );
}
