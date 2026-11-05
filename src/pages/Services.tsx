import { Link } from 'react-router-dom';
import { ArrowLeft, Check } from 'lucide-react';
import { ROUTE_PATHS } from '@/lib/index';
import { mortgageTracks, services } from '@/data/index';
import { CtaBand, PageHero } from '@/components/PageHero';
import { Reveal } from '@/components/Reveal';

export default function Services() {
  return (
    <div>
      <PageHero eyebrow="השירותים" title="שלושה תחומים. גישה אחת: מספרים לפני החלטות." lead="ליווי, ייעוץ ותמיכה למשפחות, לבעלי משכנתאות ולבעלי עסקים קטנים." />

      <section className="mx-auto max-w-7xl space-y-8 px-5 py-20">
        {services.map((s, i) => (
          <Reveal key={s.id}>
            <article className="grid gap-8 rounded-[2rem] border border-border bg-card p-8 md:grid-cols-[auto_1.3fr_1fr] md:p-12">
              <span className="num font-display text-7xl font-black text-gold/60 md:text-8xl">0{i + 1}</span>
              <div>
                <h2 className="font-display text-3xl font-black text-navy md:text-4xl">{s.title}</h2>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{s.description}</p>
                {s.id === 'mortgage' && (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {mortgageTracks.map((t) => (
                      <Link key={t.id} to={t.path} className="rounded-full border border-teal/40 bg-teal/5 px-4 py-2 text-sm font-semibold text-teal transition hover:bg-teal hover:text-white">{t.label}</Link>
                    ))}
                  </div>
                )}
                <Link to={s.path} className="mt-8 inline-flex items-center gap-2 font-bold text-navy hover:text-teal">לפרטים נוספים <ArrowLeft className="h-4 w-4" /></Link>
              </div>
              <ul className="space-y-3">
                {s.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-navy/85"><Check className="mt-1 h-4 w-4 shrink-0 text-teal" />{f}</li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
        <p className="text-center text-muted-foreground">ובנוסף: <Link to={ROUTE_PATHS.SYSTEMS} className="font-bold text-teal underline underline-offset-4">שלוש מערכות ניהול</Link> שמלוות את הלקוחות לאורך הדרך.</p>
      </section>

      <CtaBand title="לא בטוחים איפה להתחיל?" topic="שיחת היכרות" text="ספרו לנו מה מטריד אתכם, ונכוון לתחום המתאים." />
    </div>
  );
}
