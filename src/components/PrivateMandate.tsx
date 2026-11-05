import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { ROUTE_PATHS } from '@/lib/index';
import { privateMandate as m } from '@/data/index';
import { Reveal } from '@/components/Reveal';

export function PrivateMandate() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 text-ivory md:py-24">
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-[1fr_1.1fr]">
        <Reveal>
          <p className="text-sm font-bold tracking-wide text-gold">{m.eyebrow}</p>
          <h2 className="font-display mt-3 text-4xl font-black leading-tight md:text-5xl">{m.title}</h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ivory/80">{m.lead}</p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {m.areas.map((a) => (
              <li key={a} className="rounded-full border border-gold/50 px-4 py-1.5 text-sm text-gold">{a}</li>
            ))}
          </ul>
          <Link to={`${ROUTE_PATHS.CONTACT}?topic=${encodeURIComponent('מנדט פרטי')}`} className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3 font-bold text-deep transition hover:bg-ivory">
            לשיחה על מנדט פרטי <ArrowLeft className="h-4 w-4" />
          </Link>
        </Reveal>
        <div className="grid gap-4">
          {m.points.map((p, i) => (
            <Reveal key={p.t} delay={i * 0.08}>
              <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-5">
                <span className="num font-display text-3xl font-black text-gold">{i + 1}</span>
                <div>
                  <h3 className="font-display text-xl font-bold">{p.t}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ivory/75">{p.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
