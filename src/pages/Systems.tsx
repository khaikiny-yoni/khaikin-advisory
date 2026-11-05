import { Link } from 'react-router-dom';
import { ROUTE_PATHS } from '@/lib/index';
import { systems } from '@/data/index';
import { CtaBand, PageHero } from '@/components/PageHero';
import { Reveal } from '@/components/Reveal';
import { SystemDetail } from '@/components/SystemsShowcase';

export default function Systems() {
  return (
    <div>
      <PageHero eyebrow="המערכות שלנו" title="כלי ניהול שנשארים איתכם גם אחרי הפגישה" lead="ייעוץ טוב משנה מצב. מערכת טובה שומרת עליו. שלוש המערכות שלנו מכסות את התקציב המשפחתי, החיסכון המשפחתי והנטו של בעל העסק." />

      <section className="grain relative overflow-hidden bg-navy py-20 text-ivory md:py-28">
        <div className="bg-grid absolute inset-0 opacity-50 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
        <div className="relative z-10 mx-auto max-w-7xl space-y-10 px-5">
          {systems.map((s) => (
            <Reveal key={s.id}><SystemDetail s={s} /></Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-20 text-center">
        <Reveal>
          <h2 className="font-display text-3xl font-black text-navy md:text-4xl">לא בטוחים איזו מערכת מתאימה לכם?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">בשיחת ההיכרות נבין את המצב ונמליץ על המערכת, או השילוב, שמתאים לכם. אפשר גם להתחיל מכלים הקצרים באתר.</p>
          <Link to={ROUTE_PATHS.TOOLS} className="mt-6 inline-block font-bold text-teal underline underline-offset-4 hover:text-navy">לכלים וחישובים</Link>
        </Reveal>
      </section>

      <CtaBand title="רוצים לראות מערכת בפעולה?" topic="בקשת הדגמה למערכות" text="נתאם הדגמה קצרה ונתאים אותה לצורך שלכם." />
    </div>
  );
}
