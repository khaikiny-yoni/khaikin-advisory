import { useState } from 'react';
import { Disclaimer, RangeField, Segmented, money } from './shared';

export function ReverseMortgageSim() {
  const [loan, setLoan] = useState(500000);
  const [value, setValue] = useState(2500000);
  const [rate, setRate] = useState(5);
  const [years, setYears] = useState(12);
  const [mode, setMode] = useState<'accrue' | 'pay'>('accrue');

  const debt = mode === 'accrue' ? loan * Math.pow(1 + rate / 100, years) : loan;
  const pct = Math.min(100, (debt / value) * 100);
  const interestAdded = debt - loan;

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
      <div className="space-y-7">
        <RangeField label="סכום שנמשך" value={loan} min={100000} max={1500000} step={25000} onChange={setLoan} format={money} />
        <RangeField label="שווי הנכס (בהנחה שנשאר קבוע)" value={value} min={1000000} max={6000000} step={100000} onChange={setValue} format={money} />
        <RangeField label="ריבית שנתית" value={rate} min={3} max={9} step={0.1} onChange={setRate} format={(v) => `${v.toFixed(1)}%`} />
        <RangeField label="אחרי כמה שנים" value={years} min={1} max={20} step={1} onChange={setYears} format={(v) => `${v} שנים`} />
        <div>
          <p className="mb-3 text-sm font-semibold text-navy">שיטת התשלום</p>
          <Segmented<'accrue' | 'pay'>
            label="שיטת תשלום"
            value={mode}
            onChange={setMode}
            options={[
              { value: 'accrue', label: 'הריבית נצברת לחוב' },
              { value: 'pay', label: 'משלמים ריבית שוטפת' },
            ]}
          />
        </div>
      </div>

      <div className="rounded-3xl bg-navy p-6 text-ivory md:p-8">
        <p className="text-sm text-ivory/60">החוב אחרי {years} שנים</p>
        <p className="font-display text-5xl font-black num md:text-6xl">{money(debt)}</p>
        <p className="mt-2 text-sm text-ivory/60">
          {mode === 'accrue' ? (
            <>נוספו <span className="num font-bold text-gold">{money(interestAdded)}</span> ריבית שנצברה על הסכום שנמשך</>
          ) : (
            <>החוב נשאר ללא שינוי, והתשלום החודשי בערך <span className="num font-bold text-gold">{money((loan * rate) / 100 / 12)}</span></>
          )}
        </p>

        <div className="mt-8">
          <div className="mb-2 flex justify-between text-xs text-ivory/60">
            <span>חלק החוב משווי הנכס</span>
            <span className="num font-bold text-ivory">{pct.toFixed(0)}%</span>
          </div>
          <div className="h-5 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{ width: `${pct}%`, background: pct > 60 ? '#b3412f' : pct > 40 ? '#c9a961' : '#3bb0c4' }}
            />
          </div>
          <p className="mt-3 text-sm text-ivory/70">
            ההון שנשאר ליורשים (בהנחה של שווי נכס קבוע): <span className="num font-bold text-white">{money(Math.max(0, value - debt))}</span>
          </p>
        </div>
      </div>

      <div className="lg:col-span-2">
        <Disclaimer>
          המחשה של ריבית דריבית בלבד. תנאים אמיתיים (שיעור מימון, ריבית, עמלות, הוצאות משפטיות ותנאי פירעון) משתנים בין נותני השירות ונבדקים פרטנית. שווי נכס עשוי לעלות או לרדת.
        </Disclaimer>
      </div>
    </div>
  );
}
