import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, Check, PiggyBank, Wallet, Briefcase } from 'lucide-react';
import { ROUTE_PATHS } from '@/lib/index';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { systems, type SystemInfo } from '@/data/index';

const ICONS = { budget: Wallet, savings: PiggyBank, business: Briefcase } as const;

/* Illustrative previews – clearly labelled as "הדמיה", not real client data */
function BudgetPreview() {
  const rows = [
    { l: 'דיור', v: 92, c: '#0a2a55' },
    { l: 'מזון וצריכה', v: 74, c: '#17697a' },
    { l: 'ילדים וחינוך', v: 58, c: '#3bb0c4' },
    { l: 'רכב ותחבורה', v: 105, c: '#b3412f' },
    { l: 'פנאי', v: 40, c: '#c9a961' },
  ];
  return (
    <div>
      <div className="mb-5 flex items-center justify-between text-xs text-ivory/60">
        <span>תקציב מול ביצוע · החודש</span>
        <span className="rounded-full bg-white/10 px-2 py-0.5">הדמיה</span>
      </div>
      <div className="space-y-4">
        {rows.map((r, i) => (
          <div key={r.l}>
            <div className="mb-1.5 flex justify-between text-sm">
              <span>{r.l}</span>
              <span className={`num ${r.v > 100 ? 'text-[#ff8a75]' : 'text-ivory/70'}`}>{r.v}%</span>
            </div>
            <div className="h-2.5 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full rounded-full"
                style={{ background: r.c }}
                initial={{ width: 0 }}
                animate={{ width: `${Math.min(100, r.v)}%` }}
                transition={{ duration: 0.9, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </div>
        ))}
      </div>
      <p className="mt-5 rounded-xl bg-white/5 p-3 text-xs text-ivory/70">חריגה בקטגוריית רכב: התראה לפני סוף החודש</p>
    </div>
  );
}

function SavingsPreview() {
  const goals = [
    { l: 'קרן חירום', p: 80, c: '#3bb0c4' },
    { l: 'הון עצמי לדירה', p: 46, c: '#c9a961' },
    { l: 'לימודים', p: 28, c: '#17697a' },
  ];
  return (
    <div>
      <div className="mb-5 flex items-center justify-between text-xs text-ivory/60">
        <span>יעדי חיסכון</span>
        <span className="rounded-full bg-white/10 px-2 py-0.5">הדמיה</span>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {goals.map((g, i) => {
          const C = 2 * Math.PI * 34;
          return (
            <div key={g.l} className="rounded-2xl bg-white/5 p-3 text-center">
              <div className="relative mx-auto h-20 w-20">
                <svg viewBox="0 0 80 80" className="h-full w-full -rotate-90">
                  <circle cx="40" cy="40" r="34" fill="none" stroke="rgba(255,255,255,.12)" strokeWidth="7" />
                  <motion.circle
                    cx="40" cy="40" r="34" fill="none" stroke={g.c} strokeWidth="7" strokeLinecap="round" strokeDasharray={C}
                    initial={{ strokeDashoffset: C }}
                    animate={{ strokeDashoffset: C * (1 - g.p / 100) }}
                    transition={{ duration: 1.1, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  />
                </svg>
                <span className="num absolute inset-0 flex items-center justify-center text-sm font-bold">{g.p}%</span>
              </div>
              <p className="mt-2 text-xs">{g.l}</p>
            </div>
          );
        })}
      </div>
      <p className="mt-5 rounded-xl bg-white/5 p-3 text-xs text-ivory/70">הפקדה חודשית קבועה לכל יעד, וצפי להגעה אליו</p>
    </div>
  );
}

function BusinessPreview() {
  const parts = [
    { l: 'מע"מ', v: 18, c: '#6b7c99' },
    { l: 'הוצאות', v: 24, c: '#c9a961' },
    { l: 'מס הכנסה', v: 9, c: '#b3412f' },
    { l: 'ביטוח לאומי', v: 7, c: '#3bb0c4' },
    { l: 'הנטו שלך', v: 42, c: '#ffffff' },
  ];
  return (
    <div>
      <div className="mb-3 flex items-center justify-between text-xs text-ivory/60">
        <span>מה מהכסף שנכנס באמת שלך</span>
        <span className="rounded-full bg-white/10 px-2 py-0.5">הדמיה</span>
      </div>
      <p className="font-display text-5xl font-black text-white">הנטו שלי</p>
      <div className="mt-5 flex h-5 overflow-hidden rounded-full bg-white/10">
        {parts.map((p, i) => (
          <motion.div key={p.l} className="h-full" style={{ background: p.c }} initial={{ width: 0 }} animate={{ width: `${p.v}%` }} transition={{ duration: 0.9, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }} />
        ))}
      </div>
      <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-xs">
        {parts.map((p) => (
          <li key={p.l} className="flex items-center gap-2 text-ivory/80">
            <span className="h-2 w-2 rounded-full" style={{ background: p.c }} />
            {p.l}
          </li>
        ))}
      </ul>
      <p className="mt-5 rounded-xl bg-white/5 p-3 text-xs text-ivory/70">עוסק מורשה, זעיר או פטור: רואים בדיוק כמה אפשר למשוך לבית</p>
    </div>
  );
}


/* Real screenshots of the system (demo data) in a browser-style frame */
function ScreenGallery({ s }: { s: SystemInfo }) {
  const shots = s.shots ?? [];
  const [i, setI] = useState(0);
  const [open, setOpen] = useState(false);
  const cur = shots[i];
  return (
    <div className="relative">
      <div role="tablist" aria-label="מסכי המערכת" className="mb-4 flex flex-wrap gap-2">
        {shots.map((x, idx) => (
          <button
            key={x.src}
            role="tab"
            aria-selected={idx === i}
            onClick={() => setI(idx)}
            className={`rounded-full border px-4 py-1.5 text-sm font-semibold transition ${
              idx === i ? 'border-gold bg-gold text-deep' : 'border-white/20 text-ivory/80 hover:border-gold hover:text-gold'
            }`}
          >
            {x.label}
          </button>
        ))}
      </div>
      <div className="relative">
        <div className="overflow-hidden rounded-2xl border border-white/15 bg-white shadow-2xl shadow-black/30">
          <div className="flex items-center gap-1.5 border-b border-black/5 bg-[#eef2f8] px-3 py-2" aria-hidden>
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          </div>
          <AnimatePresence mode="wait">
            <motion.button
              key={cur.src}
              type="button"
              onClick={() => setOpen(true)}
              aria-label={`הגדלת התמונה: ${cur.label}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="block w-full cursor-zoom-in"
            >
              <img src={cur.src} alt={cur.alt} loading="lazy" className="block w-full" />
            </motion.button>
          </AnimatePresence>
        </div>
        {s.mobileShot && (
          <div className="absolute -bottom-6 -left-3 hidden w-[26%] overflow-hidden rounded-[1.4rem] border-4 border-deep bg-white shadow-2xl shadow-black/40 sm:block md:-left-6">
            <img src={s.mobileShot} alt="תצוגת המערכת בטלפון נייד" loading="lazy" className="block w-full" />
          </div>
        )}
      </div>
      <p className="mt-8 text-xs text-ivory/50">צילומי מסך מהמערכת עם נתוני הדגמה. אין בהם מידע על לקוחות.</p>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-[min(1200px,95vw)] border-0 bg-transparent p-0 shadow-none">
          <DialogTitle className="sr-only">{cur.label}</DialogTitle>
          <img src={cur.src} alt={cur.alt} className="w-full rounded-xl" />
        </DialogContent>
      </Dialog>
    </div>
  );
}

const PREVIEWS = { budget: BudgetPreview, savings: SavingsPreview, business: BusinessPreview } as const;

export function SystemDetail({ s }: { s: SystemInfo }) {
  const Icon = ICONS[s.id];
  const Preview = PREVIEWS[s.id];
  return (
    <div className={`grid items-stretch gap-6 ${s.shots ? 'lg:grid-cols-[0.85fr_1.15fr]' : 'lg:grid-cols-[1.1fr_1fr]'}`}>
      <div className="flex flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.04] p-7 md:p-9">
        <div>
          <div className="mb-5 flex items-center gap-3 text-gold">
            <Icon className="h-6 w-6" />
            <span className="num text-sm font-semibold tracking-widest">מערכת {s.number}</span>
          </div>
          <h3 className="font-display text-3xl font-black text-ivory md:text-4xl">{s.title}</h3>
          <p className="mt-3 font-display text-xl text-teal-light">{s.tagline}</p>
          <p className="mt-5 leading-relaxed text-ivory/75">{s.description}</p>
          <ul className="mt-6 space-y-3">
            {s.bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 text-ivory/90">
                <Check className="mt-1 h-4 w-4 shrink-0 text-gold" />
                {b}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
          <p className="max-w-xs text-sm text-ivory/60">מתאימה ל: {s.forWho}</p>
          <Link
            to={`${ROUTE_PATHS.CONTACT}?topic=${encodeURIComponent(s.topic)}`}
            className="group inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 font-bold text-deep transition hover:bg-white"
          >
            בקשת הדגמה
            <ArrowLeft className="h-4 w-4 transition group-hover:-translate-x-1" />
          </Link>
        </div>
      </div>
      <div className="grain relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0d3566] to-deep p-7 text-ivory md:p-9">
        {s.shots ? <ScreenGallery s={s} /> : <Preview />}
      </div>
    </div>
  );
}

export function SystemsShowcase() {
  const [active, setActive] = useState<SystemInfo['id']>('budget');
  const current = systems.find((s) => s.id === active)!;
  return (
    <div>
      <div role="tablist" aria-label="המערכות שלנו" className="mb-8 flex flex-wrap gap-2">
        {systems.map((s) => {
          const on = s.id === active;
          return (
            <button
              key={s.id}
              role="tab"
              aria-selected={on}
              onClick={() => setActive(s.id)}
              className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-all ${
                on ? 'border-gold bg-gold text-deep' : 'border-white/20 text-ivory/80 hover:border-gold hover:text-gold'
              }`}
            >
              <span className="num ml-2 opacity-60">{s.number}</span>
              {s.short}
            </button>
          );
        })}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={current.id} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.35 }}>
          <SystemDetail s={current} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
