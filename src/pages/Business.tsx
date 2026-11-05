import { Link } from 'react-router-dom';
import { ArrowLeft, BarChart3, Calculator, FileText, Wallet } from 'lucide-react';
import { ROUTE_PATHS } from '@/lib/index';
import { CtaBand, PageHero } from '@/components/PageHero';
import { Reveal, SectionHead } from '@/components/Reveal';
import { BusinessNetCalculator } from '@/components/tools/BusinessNetCalculator';

const dealers = [
  { t: 'עוסק מורשה', d: 'גובה מע"מ ומנכה מע"מ על הוצאות. מתאים לעסקים שמחזורם גבוה מתקרת הפטור או שעובדים מול עסקים אחרים.', key: 'חשוב לדעת: המע"מ שנכנס לחשבון אינו כסף של העסק.' },
  { t: 'עוסק זעיר', d: 'מסלול פשוט לעסק קטן מאוד, בכפוף לתקרת מחזור שנתית. הדיווח פשוט יותר.', key: 'חשוב לדעת: הנטו נקבע לפי הרווח ולא לפי המחזור.' },
  { t: 'עוסק פטור', d: 'לא גובה מע"מ, עד תקרת מחזור שנתית (122,833 ₪ ב-2026). אין ניכוי מע"מ על הוצאות.', key: 'חשוב לדעת: חריגה מהתקרה מחייבת מעבר לעוסק מורשה.' },
];

const what = [
  { icon: FileText, t: 'ניתוח הדוחות העסקיים', d: 'דוחות רווח והפסד, תנועות חשבון העסק והכנסות והוצאות לאורך זמן.' },
  { icon: BarChart3, t: 'רווחיות אמיתית', d: 'כמה העסק באמת מרוויח, לפי מוצר, לקוח וחודש, ואיפה מדלפים.' },
  { icon: Wallet, t: 'הנטו לבעל העסק', d: 'כמה אפשר למשוך הביתה אחרי מע"מ, מס הכנסה וביטוח לאומי.' },
  { icon: Calculator, t: 'תכנון ותזרים', d: 'הפרשות למיסים, מקדמות ויעדי צמיחה, כדי שאין הפתעות בסוף שנה.' },
];

export default function Business() {
  return (
    <div>
      <PageHero eyebrow="ייעוץ וליווי עסקי" title="כמה מהכסף שנכנס לעסק באמת שלך?" lead="בעלי עסקים קטנים מסתכלים על יתרת הבנק, אבל חלק גדול ממנה שייך למדינה. אנחנו מנתחים את הדוחות ומראים את הנטו שאפשר לקחת הביתה.">
        <Link to={ROUTE_PATHS.CONTACT + '?topic=ייעוץ וליווי עסקי'} className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 font-bold text-deep transition hover:bg-white">
          קביעת שיחה <ArrowLeft className="h-4 w-4" />
        </Link>
      </PageHero>

      <section className="mx-auto max-w-7xl px-5 py-20 md:py-28">
        <Reveal><SectionHead eyebrow="מה עושים" title="ליווי שמתחיל במספרים של העסק" /></Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {what.map((w, i) => (
            <Reveal key={w.t} delay={i * 0.06}>
              <div className="h-full rounded-3xl border border-border bg-card p-7 transition hover:-translate-y-1 hover:border-teal/50">
                <w.icon className="h-8 w-8 text-teal" />
                <h3 className="mt-5 font-display text-xl font-black text-navy">{w.t}</h3>
                <p className="mt-2 text-muted-foreground">{w.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-secondary/60 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal><SectionHead eyebrow="סוגי עוסקים" title="מורשה, זעיר או פטור: מה משתנה" /></Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {dealers.map((d, i) => (
              <Reveal key={d.t} delay={i * 0.07}>
                <div className="flex h-full flex-col rounded-3xl bg-card p-7 shadow-sm">
                  <h3 className="font-display text-2xl font-black text-navy">{d.t}</h3>
                  <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">{d.d}</p>
                  <p className="mt-5 rounded-xl bg-teal/10 p-3 text-sm font-semibold text-teal">{d.key}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:py-28">
        <Reveal><SectionHead eyebrow="חישוב מהיר" title="הנטו שלי: כמה נשאר אחרי המיסים" lead="הזינו הכנסות והוצאות חודשיות וראו את הפירוט." /></Reveal>
        <div className="mt-10 rounded-[2rem] border border-border bg-card p-6 md:p-10"><BusinessNetCalculator /></div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-8">
        <div className="grid items-center gap-6 rounded-[2rem] bg-navy p-8 text-ivory md:grid-cols-[1.3fr_1fr] md:p-12">
          <div>
            <h2 className="font-display text-3xl font-black md:text-4xl">מערכת הניהול העסקי: הנטו שלי</h2>
            <p className="mt-3 text-ivory/75">מערכת שמנגישה לבעל העסק את הנטו שהוא יכול לקחת הביתה אחרי תשלום המיסים. חשובה לכל עצמאי בישראל.</p>
          </div>
          <Link to={ROUTE_PATHS.SYSTEMS} className="justify-self-start rounded-full bg-gold px-7 py-3.5 font-bold text-deep transition hover:bg-white md:justify-self-end">למערכות שלנו</Link>
        </div>
      </section>

      <CtaBand title="רוצים לדעת כמה העסק באמת מרוויח?" topic="ייעוץ וליווי עסקי" text="שלחו דוחות או בואו לשיחה, ונבנה תמונת מצב ברורה." />
    </div>
  );
}
