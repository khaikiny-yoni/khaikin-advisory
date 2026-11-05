import { testimonials } from '@/data/index';
import { CtaBand, PageHero } from '@/components/PageHero';
import { Reveal } from '@/components/Reveal';

export default function Testimonials() {
  return (
    <div>
      <PageHero eyebrow="המלצות" title="לקוחות מספרים" lead="מה אומרים אנשים שעבדו איתנו על משכנתא, על כלכלת המשפחה ועל אשראי." />
      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.id} delay={i * 0.07}>
              <figure className="flex h-full flex-col rounded-3xl border border-border bg-card p-8">
                <span className="font-display text-7xl leading-none text-gold">״</span>
                <blockquote className="-mt-3 flex-1 text-lg leading-relaxed text-navy/90">{t.content}</blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-navy font-display text-xl font-bold text-ivory">{t.name[0]}</span>
                  <span><span className="block font-bold text-navy">{t.name}</span><span className="text-sm text-muted-foreground">{t.role}</span></span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>
      <CtaBand title="רוצים להיות הסיפור הבא?" topic="שיחת היכרות" />
    </div>
  );
}
