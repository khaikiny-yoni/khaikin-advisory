import { Link } from 'react-router-dom';
import { ArrowLeft, CreditCard, Landmark, LineChart, Target } from 'lucide-react';
import { ROUTE_PATHS } from '@/lib/index';
import { CtaBand, PageHero } from '@/components/PageHero';
import { Reveal, SectionHead } from '@/components/Reveal';
import { FamilyHealthCheck } from '@/components/tools/FamilyHealthCheck';

const analysis = [
  { icon: Landmark, t: 'תנועות חשבון הבנק', d: 'כל הכנסה והוצאה, התחייבויות קבועות, עמלות וריביות חובה.' },
  { icon: CreditCard, t: 'כרטיסי האשראי', d: 'לאן הכסף הולך בפועל: קטגוריות, הוצאות שחוזרות והוצאות שנשכחו.' },
  { icon: LineChart, t: 'מעקב הכנסות והוצאות', d: 'תמונה חודשית שמראה את הפער האמיתי ואת הטרנד לאורך זמן.' },
  { icon: Target, t: 'תוכנית ויעדים', d: 'סדר פעולות ליציאה ממינוס, ואחר כך קרן חירום וחיסכון.' },
];

const stages = [
  { n: '1', t: 'עוצרים את הדימום', d: 'מזהים ומצמצמים עמלות, ריביות חריגות והוצאות שאפשר לוותר עליהן.' },
  { n: '2', t: 'יוצאים מהמינוס', d: 'תוכנית החזר מדורגת, כולל איחוד התחייבויות כשזה משתלם.' },
  { n: '3', t: 'בונים יציבות', d: 'תקציב חודשי וקרן חירום, כך שהחודש לא יגמר לפני הזמן.' },
  { n: '4', t: 'צומחים', d: 'חיסכון ממוקד יעדים, ובדיקה של ההתחייבויות הגדולות.' },
];

export default function FamilyFinance() {
  return (
    <div>
      <PageHero eyebrow="ייעוץ לכלכלת המשפחה" title="מהמינוס לפלוס, בשיטה ולא בהרגשה" lead="אנחנו עוברים על התנועות האמיתיות בחשבון ובכרטיסי האשראי, מזהים לאן הכסף בורח ובונים תוכנית ברורה שאפשר לבצע.">
        <Link to={ROUTE_PATHS.CONTACT + '?topic=ייעוץ לכלכלת המשפחה'} className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 font-bold text-deep transition hover:bg-white">
          קביעת שיחה <ArrowLeft className="h-4 w-4" />
        </Link>
      </PageHero>

      <section className="mx-auto max-w-7xl px-5 py-20 md:py-28">
        <Reveal><SectionHead eyebrow="מה בודקים" title="עובדים על נתונים, לא על הערכות" /></Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {analysis.map((a, i) => (
            <Reveal key={a.t} delay={i * 0.06}>
              <div className="h-full rounded-3xl border border-border bg-card p-7 transition hover:-translate-y-1 hover:border-teal/50">
                <a.icon className="h-8 w-8 text-teal" />
                <h3 className="mt-5 font-display text-xl font-black text-navy">{a.t}</h3>
                <p className="mt-2 text-muted-foreground">{a.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-secondary/60 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal><SectionHead eyebrow="הדרך" title="ארבעה שלבים ליציבות כלכלית" /></Reveal>
          <ol className="mt-12 grid gap-5 md:grid-cols-4">
            {stages.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.07}>
                <li className="relative h-full rounded-3xl bg-card p-7 shadow-sm">
                  <span className="num font-display text-6xl font-black text-gold/60">{s.n}</span>
                  <h3 className="mt-2 font-display text-xl font-black text-navy">{s.t}</h3>
                  <p className="mt-2 text-muted-foreground">{s.d}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-20 md:py-28">
        <Reveal><SectionHead eyebrow="בדיקה מהירה" title="כמה בריאה הכלכלה של המשפחה?" lead="חמש שאלות, ציון מיידי." /></Reveal>
        <div className="mt-10 rounded-[2rem] border border-border bg-card p-6 md:p-10"><FamilyHealthCheck /></div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-8">
        <div className="grid items-center gap-6 rounded-[2rem] bg-navy p-8 text-ivory md:grid-cols-[1.3fr_1fr] md:p-12">
          <div>
            <h2 className="font-display text-3xl font-black md:text-4xl">שתי מערכות שמלוות את הסדר החדש</h2>
            <p className="mt-3 text-ivory/75">מערכת לניהול תקציב משפחתי ומערכת לניהול חיסכון משפחתי: כדי שהשינוי יישאר גם אחרי הפגישות.</p>
          </div>
          <Link to={ROUTE_PATHS.SYSTEMS} className="justify-self-start rounded-full bg-gold px-7 py-3.5 font-bold text-deep transition hover:bg-white md:justify-self-end">למערכות שלנו</Link>
        </div>
      </section>

      <CtaBand title="מוכנים להפסיק לחשוש מסוף החודש?" topic="ייעוץ לכלכלת המשפחה" text="נתחיל בשיחה קצרה ובניתוח ראשוני של המצב." />
    </div>
  );
}
