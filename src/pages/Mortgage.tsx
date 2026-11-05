import { Link, NavLink, useLocation } from 'react-router-dom';
import { AlertCircle, Check } from 'lucide-react';
import { ROUTE_PATHS } from '@/lib/index';
import { mortgageTracks } from '@/data/index';
import { CtaBand, PageHero } from '@/components/PageHero';
import { Reveal, SectionHead } from '@/components/Reveal';
import { MortgageCalculator } from '@/components/tools/MortgageCalculator';
import { ReverseMortgageSim } from '@/components/tools/ReverseMortgageSim';

const creditChecks = [
  'מה העלות הכוללת של האשראי (ריבית, עמלות, הוצאות) ולא רק הריבית הנקובה',
  'איזה נכס משועבד, ומה קורה אם לא עומדים בהחזר',
  'האם אפשר לפרוע מוקדם, ובאיזה קנס',
  'מה התוכנית לחזור למימון בנקאי זול יותר',
];

export default function Mortgage() {
  const { pathname } = useLocation();
  const track = mortgageTracks.find((t) => pathname.startsWith(t.path)) ?? mortgageTracks[0];

  return (
    <div>
      <PageHero eyebrow="ייעוץ משכנתאות" title={track.title} lead={track.lead}>
        <nav className="flex flex-wrap gap-2" aria-label="תחומי משכנתאות">
          {mortgageTracks.map((t) => (
            <NavLink
              key={t.id}
              to={t.path}
              className={({ isActive }) =>
                `rounded-full border px-5 py-2.5 text-sm font-semibold transition-all ${
                  isActive ? 'border-gold bg-gold text-deep' : 'border-white/25 text-ivory/85 hover:border-gold hover:text-gold'
                }`
              }
            >
              {t.label}
            </NavLink>
          ))}
        </nav>
      </PageHero>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <h2 className="font-display text-3xl font-black text-navy md:text-4xl">למי זה מתאים</h2>
          <ul className="mt-6 space-y-4">
            {track.forWho.map((w) => (
              <li key={w} className="flex items-start gap-3 text-lg text-navy/85">
                <Check className="mt-1.5 h-5 w-5 shrink-0 text-teal" /> {w}
              </li>
            ))}
          </ul>
          {'note' in track && track.note && (
            <div className="mt-8 flex gap-3 rounded-2xl border border-gold/50 bg-gold/10 p-5 text-[15px] leading-relaxed text-navy">
              <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-gold" /> <p>{track.note}</p>
            </div>
          )}
        </Reveal>

        <ol className="space-y-4">
          {track.steps.map((s, i) => (
            <Reveal key={s.t} delay={i * 0.05}>
              <li className="flex gap-5 rounded-2xl border border-border bg-card p-6">
                <span className="num font-display text-3xl font-black text-gold">0{i + 1}</span>
                <div>
                  <h3 className="font-display text-xl font-black text-navy">{s.t}</h3>
                  <p className="mt-1 text-muted-foreground">{s.d}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      {track.id === 'mortgage' && (
        <section className="bg-secondary/60 py-20">
          <div className="mx-auto max-w-7xl px-5">
            <SectionHead eyebrow="מחשבון" title="כמה זה יעלה, וכמה אפשר לחסוך?" />
            <div className="mt-10 rounded-[2rem] border border-border bg-card p-6 md:p-10"><MortgageCalculator /></div>
          </div>
        </section>
      )}

      {track.id === 'credit' && (
        <section className="bg-secondary/60 py-20">
          <div className="mx-auto max-w-4xl px-5">
            <SectionHead eyebrow="לפני שחותמים" title="ארבע שאלות שחייבים לקבל עליהן תשובה" />
            <ul className="mt-8 grid gap-4 md:grid-cols-2">
              {creditChecks.map((c, i) => (
                <li key={c} className="rounded-2xl border border-border bg-card p-6">
                  <span className="num font-display text-3xl font-black text-teal">{i + 1}</span>
                  <p className="mt-2 text-navy/90">{c}</p>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-muted-foreground">
              אשראי חוץ בנקאי הוא חלק מעולם המשכנתאות: לעיתים הוא הגשר, ולעיתים עדיף לתקן את הבקשה מול הבנק.{' '}
              <Link to={ROUTE_PATHS.MORTGAGE} className="font-semibold text-teal underline underline-offset-4">לייעוץ משכנתאות</Link>
            </p>
          </div>
        </section>
      )}

      {track.id === 'reverse' && (
        <section className="bg-secondary/60 py-20">
          <div className="mx-auto max-w-7xl px-5">
            <SectionHead eyebrow="המחשה" title="מה קורה לחוב עם השנים?" lead="ההבדל בין ריבית שנצברת לריבית שמשלמים שוטף הוא ההבדל בין חוב שגדל לחוב שנשאר קבוע." />
            <div className="mt-10 rounded-[2rem] border border-border bg-card p-6 md:p-10"><ReverseMortgageSim /></div>
          </div>
        </section>
      )}

      <CtaBand title={`רוצים לבדוק מה מתאים לכם ב${track.label}?`} topic={track.title} text="שיחת היכרות ראשונה ללא התחייבות." />
    </div>
  );
}
