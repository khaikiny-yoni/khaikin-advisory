import { Link } from 'react-router-dom';
import { ROUTE_PATHS } from '@/lib/index';
import { IMG, advisorInfo } from '@/data/index';
import { CtaBand, PageHero } from '@/components/PageHero';
import { Reveal, SectionHead } from '@/components/Reveal';

const values = [
  { t: 'מספרים לפני המלצות', d: 'כל ייעוץ מתחיל בניתוח הנתונים האמיתיים: דוחות, תנועות ומשכנתא.' },
  { t: 'שקיפות מלאה', d: 'מסבירים מה עולה, מה הסיכון ומה החלופות, גם כשזה לא הפתרון הנוח.' },
  { t: 'ליווי עד התוצאה', d: 'לא נעלמים אחרי הפגישה. מלווים בביצוע ובמערכות הניהול.' },
];

export default function About() {
  return (
    <div>
      <PageHero eyebrow="אודות" title={advisorInfo.name} lead={`${advisorInfo.title} · ${advisorInfo.experience}`} />

      <section className="mx-auto grid max-w-7xl items-start gap-14 px-5 py-20 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <div className="relative mx-auto max-w-sm lg:sticky lg:top-28">
            <div className="absolute -bottom-4 -left-4 h-full w-full rounded-[2rem] border-2 border-gold/60" />
            <img src={IMG.BRIDGE} alt={advisorInfo.name} className="relative aspect-[3/4] w-full rounded-[2rem] object-cover object-top" />
          </div>
        </Reveal>
        <div>
          <Reveal>
            <SectionHead eyebrow="הסיפור" title="מהבנק אל הצד של הלקוח" />
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{advisorInfo.philosophy}</p>
          </Reveal>
          <ol className="mt-10 space-y-4 border-r-2 border-dashed border-navy/20 pr-6">
            {advisorInfo.timeline.map((t) => (
              <Reveal key={t.year}>
                <li className="relative rounded-2xl border border-border bg-card p-5">
                  <span className="absolute -right-[2.1rem] top-6 h-3 w-3 rounded-full bg-gold ring-4 ring-background" />
                  <p className="num font-display text-2xl font-black text-gold">{t.year}</p>
                  <p className="mt-1 text-navy/85">{t.description}</p>
                </li>
              </Reveal>
            ))}
          </ol>
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {values.map((v) => (
              <Reveal key={v.t}>
                <div className="h-full rounded-2xl bg-navy p-6 text-ivory">
                  <h3 className="font-display text-xl font-black text-gold">{v.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ivory/75">{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Link to={ROUTE_PATHS.SERVICES} className="mt-10 inline-block font-bold text-teal underline underline-offset-4 hover:text-navy">לשירותים</Link>
        </div>
      </section>

      <CtaBand title="נשמח להכיר" topic="שיחת היכרות" />
    </div>
  );
}
