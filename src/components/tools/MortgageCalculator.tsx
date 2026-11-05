import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { ROUTE_PATHS } from '@/lib/index';
import { Disclaimer, RangeField, fmt, money } from './shared';

function schedule(P: number, annualRate: number, years: number) {
  const r = annualRate / 100 / 12;
  const n = years * 12;
  const pay = r === 0 ? P / n : (P * r) / (1 - Math.pow(1 + r, -n));
  let bal = P;
  const rows: { year: number; קרן: number; ריבית: number }[] = [];
  let principalY = 0;
  let interestY = 0;
  for (let m = 1; m <= n; m++) {
    const interest = bal * r;
    const principal = pay - interest;
    bal -= principal;
    principalY += principal;
    interestY += interest;
    if (m % 12 === 0) {
      rows.push({ year: m / 12, קרן: Math.round(principalY), ריבית: Math.round(interestY) });
      principalY = 0;
      interestY = 0;
    }
  }
  return { pay, total: pay * n, interest: pay * n - P, rows };
}

export function MortgageCalculator() {
  const [amount, setAmount] = useState(1200000);
  const [rate, setRate] = useState(4.5);
  const [years, setYears] = useState(25);

  const base = useMemo(() => schedule(amount, rate, years), [amount, rate, years]);
  const better = useMemo(() => schedule(amount, Math.max(0.1, rate - 0.5), years), [amount, rate, years]);
  const saving = base.total - better.total;
  const interestShare = (base.interest / base.total) * 100;

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_1.15fr]">
      <div className="space-y-8">
        <RangeField label="סכום ההלוואה" value={amount} min={200000} max={3000000} step={50000} onChange={setAmount} format={money} />
        <RangeField label="ריבית שנתית" value={rate} min={2} max={8} step={0.05} onChange={setRate} format={(v) => `${v.toFixed(2)}%`} />
        <RangeField label="תקופה" value={years} min={5} max={30} step={1} onChange={setYears} format={(v) => `${v} שנים`} />

        <div className="rounded-2xl border border-teal/30 bg-teal/5 p-5">
          <p className="text-sm font-semibold text-teal">מה חצי אחוז ריבית שווה?</p>
          <p className="mt-2 font-display text-3xl font-black text-navy num">{money(saving)}</p>
          <p className="mt-1 text-sm text-muted-foreground">
            חיסכון כולל לאורך חיי ההלוואה, אם הריבית נמוכה ב-0.5% (בריבית של {(Math.max(0.1, rate - 0.5)).toFixed(2)}%).
          </p>
        </div>
      </div>

      <div className="rounded-3xl bg-navy p-6 text-ivory md:p-8">
        <p className="text-sm text-ivory/60">החזר חודשי משוער</p>
        <p className="font-display text-5xl font-black num md:text-6xl">{money(base.pay)}</p>

        <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
          <div className="rounded-xl bg-white/5 p-4">
            <p className="text-ivory/60">סה"כ ריבית</p>
            <p className="mt-1 font-display text-2xl font-bold num text-gold">{money(base.interest)}</p>
          </div>
          <div className="rounded-xl bg-white/5 p-4">
            <p className="text-ivory/60">סה"כ תשלום</p>
            <p className="mt-1 font-display text-2xl font-bold num">{money(base.total)}</p>
          </div>
        </div>

        <div className="mt-6">
          <div className="mb-2 flex justify-between text-xs text-ivory/60">
            <span>קרן {fmt(100 - interestShare)}%</span>
            <span>ריבית {fmt(interestShare)}%</span>
          </div>
          <div className="flex h-3 overflow-hidden rounded-full bg-white/10">
            <div className="bg-teal-light transition-all duration-500" style={{ width: `${100 - interestShare}%` }} />
            <div className="bg-gold transition-all duration-500" style={{ width: `${interestShare}%` }} />
          </div>
        </div>

        <div className="mt-6 h-44 w-full" dir="ltr" aria-label="תשלום קרן וריבית לפי שנה">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={base.rows} margin={{ top: 4, right: 0, left: 0, bottom: 0 }}>
              <CartesianGrid vertical={false} stroke="rgba(255,255,255,0.08)" />
              <XAxis dataKey="year" tick={{ fill: 'rgba(246,243,236,0.5)', fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis hide />
              <Tooltip
                cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                contentStyle={{ background: '#061a3b', border: '1px solid rgba(255,255,255,.15)', borderRadius: 12, direction: 'rtl' }}
                labelFormatter={(l) => `שנה ${l}`}
                formatter={(v: number) => money(v)}
              />
              <Bar dataKey="קרן" stackId="a" fill="#3bb0c4" />
              <Bar dataKey="ריבית" stackId="a" fill="#c9a961" radius={[3, 3, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <p className="mt-2 text-center text-xs text-ivory/50">תשלום שנתי: קרן (תכלת) מול ריבית (זהב)</p>
      </div>

      <div className="lg:col-span-2">
        <Disclaimer>
          חישוב להמחשה בלבד: לוח סילוקין רגיל (שפיצר) בריבית קבועה ובלי הצמדה. משכנתא אמיתית בנויה מכמה מסלולים עם הצמדות ותקופות שונות, ולכן התוצאה תשתנה.{' '}
          <Link to={ROUTE_PATHS.CONTACT + '?topic=ייעוץ משכנתאות'} className="font-semibold text-teal underline underline-offset-4">
            נבנה לך תמהיל מדויק
          </Link>
          .
        </Disclaimer>
      </div>
    </div>
  );
}
