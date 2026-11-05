import { useEffect, useRef, useState } from 'react';
import { animate, motion, useInView } from 'framer-motion';

export function Reveal({
  children,
  delay = 0,
  y = 28,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function CountUp({
  to,
  suffix = '',
  prefix = '',
  duration = 1.6,
}: {
  to: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setVal(Math.round(v)),
    });
    return () => c.stop();
  }, [inView, to, duration]);
  return (
    <span ref={ref} className="num">
      {prefix}
      {val.toLocaleString('he-IL')}
      {suffix}
    </span>
  );
}

export function SectionHead({
  eyebrow,
  title,
  lead,
  light = false,
  center = false,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lead?: string;
  light?: boolean;
  center?: boolean;
}) {
  return (
    <div className={`${center ? 'text-center mx-auto' : ''} max-w-3xl`}>
      {eyebrow && (
        <p
          className={`mb-4 inline-flex items-center gap-3 text-sm font-semibold tracking-wide ${
            light ? 'text-gold' : 'text-teal'
          }`}
        >
          <span className={`h-px w-8 ${light ? 'bg-gold' : 'bg-teal'}`} />
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-display text-4xl font-black md:text-5xl text-balance ${
          light ? 'text-ivory' : 'text-navy'
        }`}
      >
        {title}
      </h2>
      {lead && (
        <p className={`mt-5 text-lg leading-relaxed ${light ? 'text-ivory/70' : 'text-muted-foreground'}`}>
          {lead}
        </p>
      )}
    </div>
  );
}
