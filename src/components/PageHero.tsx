import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export function PageHero({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lead?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="grain relative overflow-hidden bg-deep text-ivory">
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_top_right,black_20%,transparent_70%)]" />
      <div className="absolute -left-32 -top-20 h-96 w-96 rounded-full bg-teal/30 blur-[110px]" />
      <div className="relative z-10 mx-auto max-w-7xl px-5 pb-16 pt-16 md:pb-24 md:pt-24">
        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-5 inline-flex items-center gap-3 text-sm font-semibold tracking-wide text-gold">
          <span className="h-px w-10 bg-gold" /> {eyebrow}
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }} className="max-w-4xl font-display text-4xl font-black leading-[1.08] text-balance md:text-6xl">
          {title}
        </motion.h1>
        {lead && (
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }} className="mt-6 max-w-2xl text-lg leading-relaxed text-ivory/75 md:text-xl">
            {lead}
          </motion.p>
        )}
        {children && <div className="mt-9">{children}</div>}
      </div>
    </section>
  );
}

export function CtaBand({ title, topic, text }: { title: string; topic: string; text?: string }) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20">
      <div className="grain relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-navy to-teal p-10 text-ivory md:p-14">
        <div className="relative z-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-3xl font-black text-balance md:text-4xl">{title}</h2>
            {text && <p className="mt-3 max-w-xl text-ivory/80">{text}</p>}
          </div>
          <Link to={`/contact?topic=${encodeURIComponent(topic)}`} className="shrink-0 rounded-full bg-gold px-8 py-4 text-lg font-bold text-deep transition hover:bg-white">
            קביעת שיחה
          </Link>
        </div>
      </div>
    </section>
  );
}
