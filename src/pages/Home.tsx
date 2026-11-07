import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Briefcase, Home as HomeIcon, Phone, Users } from 'lucide-react';
import { ROUTE_PATHS, COMPANY_INFO } from '@/lib/index';
import { IMG, advisorInfo, processSteps, services, testimonials } from '@/data/index';
import { CountUp, Reveal, SectionHead } from '@/components/Reveal';
import { PrivateMandate } from '@/components/PrivateMandate';
import { SystemsShowcase } from '@/components/SystemsShowcase';
import { ToolsLab } from '@/components/tools/ToolsLab';

const ICONS = { home: HomeIcon, users: Users, briefcase: Briefcase } as const;

const entry = [
  { label: 'אני רוצה לצאת ממינוס', to: ROUTE_PATHS.FAMILY_FINANCE },
  { label: 'יש לי משכנתא / רוצה לקחת', to: ROUTE_PATHS.MORTGAGE },
  { label: 'העסק שלי', to: ROUTE_PATHS.BUSINESS },
];

const ticker = ['משכנתא', 'מחזור משכנתא', 'אשראי חוץ בנקאי', 'משכנתא הפוכה', 'יציאה ממינוס', 'תקציב משפחתי', 'חיסכון משפחתי', 'ליווי עסקי', 'הנטו שלי', 'עוסק מורשה · זעיר · פטור'];

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="grain relative overflow-hidden bg-deep text-ivory">
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
        <div className="absolute -left-40 top-10 h-[34rem] w-[34rem] rounded-full bg-teal/30 blur-[120px]" />
        <div className="absolute -right-32 bottom-0 h-[26rem] w-[26rem] rounded-full bg-navy blur-[100px]" />

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-16 lg:grid-cols-[1.15fr_0.85fr] lg:pb-28 lg:pt-24">
          <div>
            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-6 inline-flex items-center gap-3 text-sm font-semibold tracking-wide text-gold">
              <span className="h-px w-10 bg-gold" /> {COMPANY_INFO.slogan}
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }} className="font-display text-5xl font-black leading-[1.05] text-balance md:text-7xl">
              מפסיקים לנחש.
              <br />
              <span className="bg-gradient-to-l from-gold via-[#e9d49a] to-gold bg-clip-text text-transparent">מתחילים לנהל</span> את הכסף.
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="mt-7 max-w-xl text-lg leading-relaxed text-ivory/75 md:text-xl">
              ייעוץ משכנתאות, כלכלת המשפחה וליווי עסקי, על בסיס המספרים האמיתיים שלכם: תנועות הבנק, כרטיסי האשראי, דוחות העסק והמשכנתא.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.32 }} className="mt-10">
              <p className="mb-3 text-sm text-ivory/50">מאיפה מתחילים?</p>
              <div className="flex flex-wrap gap-3">
                {entry.map((e) => (
                  <Link key={e.to} to={e.to} className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 font-semibold backdrop-blur transition hover:border-gold hover:bg-gold hover:text-deep">
                    {e.label}
                    <ArrowLeft className="h-4 w-4 transition group-hover:-translate-x-1" />
                  </Link>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-5">
                <Link to={ROUTE_PATHS.CONTACT} className="inline-flex items-center gap-2 rounded-full bg-teal px-7 py-3.5 font-bold text-white shadow-lg shadow-teal/30 transition hover:bg-teal-light hover:text-deep">
                  <Phone className="h-4 w-4" /> קביעת שיחת היכרות
                </Link>
                <span className="text-sm text-ivory/50">ללא התחייבות</span>
              </div>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }} className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-3 rounded-[2.5rem] bg-gradient-to-br from-gold/50 via-transparent to-teal/50 blur-sm" />
            <div className="relative overflow-hidden rounded-[2.2rem] border border-white/15">
              <img src={IMG.HERO} alt="יהונתן חייקין, יועץ פיננסי" className="aspect-[4/5] w-full object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-t from-deep/70 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="font-display text-2xl font-bold">{advisorInfo.name}</p>
                <p className="text-sm text-ivory/70">{advisorInfo.title} · ירושלים</p>
              </div>
            </div>
            <div className="float-slow absolute -right-5 top-10 rounded-2xl border border-white/20 bg-deep/80 px-5 py-4 shadow-2xl backdrop-blur-xl md:-right-10">
              <p className="font-display text-4xl font-black text-gold"><CountUp to={20} suffix="+" /></p>
              <p className="text-xs text-ivory/70">שנות ניסיון · מ-2004</p>
            </div>
            <div className="float-slow absolute -left-4 bottom-24 rounded-2xl border border-white/20 bg-deep/80 px-5 py-4 shadow-2xl backdrop-blur-xl md:-left-10" style={{ animationDelay: '1.6s' }}>
              <p className="text-xs text-ivory/60">3 תחומים · 3 מערכות</p>
              <p className="font-display text-lg font-bold">משכנתא · משפחה · עסק</p>
            </div>
          </motion.div>
        </div>

        {/* ticker */}
        <div className="marquee relative z-10 overflow-hidden border-y border-white/10 bg-black/20 py-4" dir="ltr" aria-hidden>
          <div className="marquee-track flex gap-10 whitespace-nowrap" dir="rtl">
            {[...ticker, ...ticker, ...ticker, ...ticker].map((t, i) => (
              <span key={i} className="flex items-center gap-10 font-display text-xl text-ivory/70">
                {t} <span className="text-gold">◆</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* THREE PILLARS */}
      <section className="mx-auto max-w-7xl px-5 py-24 md:py-32">
        <Reveal>
          <SectionHead eyebrow="שלושה תחומי ליבה" title="מקום אחד לכל ההחלטות הכספיות שלכם" lead="לא קטלוג שירותים, אלא מסלולים שנבנים סביב מה שקורה בחיים שלכם." />
        </Reveal>

        <div className="mt-14 space-y-6">
          {services.map((s, i) => {
            const Icon = ICONS[s.icon as keyof typeof ICONS];
            return (
              <Reveal key={s.id} delay={0.05}>
                <Link to={s.path} className="group grid items-center gap-6 rounded-[2rem] border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-1 hover:border-teal/50 hover:shadow-[0_30px_70px_-35px_rgba(10,42,85,.45)] md:grid-cols-[auto_1.2fr_1fr_auto] md:gap-10 md:p-10">
                  <div className="flex items-center gap-5 md:block">
                    <span className="num font-display text-6xl font-black text-navy/10 transition group-hover:text-gold md:text-8xl">0{i + 1}</span>
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy text-ivory transition group-hover:bg-teal md:hidden"><Icon className="h-7 w-7" /></span>
                  </div>
                  <div>
                    <h3 className="font-display text-3xl font-black text-navy md:text-4xl">{s.title}</h3>
                    <p className="mt-3 leading-relaxed text-muted-foreground">{s.description}</p>
                  </div>
                  <ul className="space-y-2.5 text-[15px] text-navy/85">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5"><span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />{f}</li>
                    ))}
                  </ul>
                  <span className="hidden h-16 w-16 items-center justify-center rounded-full border border-border text-navy transition group-hover:border-teal group-hover:bg-teal group-hover:text-white md:flex">
                    <ArrowLeft className="h-6 w-6 transition group-hover:-translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* SYSTEMS */}
      <section className="grain relative overflow-hidden bg-navy py-24 text-ivory md:py-32">
        <div className="bg-grid absolute inset-0 opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
        <div className="relative z-10 mx-auto max-w-7xl px-5">
          <Reveal>
            <SectionHead light eyebrow="המערכות שלנו" title="לא רק ייעוץ. גם כלי ניהול שנשארים איתכם." lead="שלוש מערכות שפיתחנו כדי שהסדר הכלכלי לא יסתיים בפגישה: תקציב, חיסכון, ונטו אמיתי לבעלי עסקים." />
          </Reveal>
          <div className="mt-12"><SystemsShowcase /></div>
          <div className="mt-8"><Link to={ROUTE_PATHS.SYSTEMS} className="inline-flex items-center gap-2 font-semibold text-gold hover:text-white">לעמוד המערכות המלא <ArrowLeft className="h-4 w-4" /></Link></div>
        </div>
      </section>

      {/* LAB */}
      <section className="mx-auto max-w-7xl px-5 py-24 md:py-32">
        <Reveal>
          <SectionHead eyebrow="נסו בעצמכם" title="תמונת מצב ראשונה, תוך דקה" lead="שלושה כלים אינטראקטיביים: בדיקת בריאות כלכלית למשפחה, מחשבון משכנתא, והנטו שנשאר לבעל עסק אחרי המיסים." />
        </Reveal>
        <div className="mt-12"><ToolsLab /></div>
      </section>

      {/* PROCESS */}
      <section className="bg-secondary/60 py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Reveal><SectionHead eyebrow="איך עובדים" title="ארבעה שלבים, מנתונים לתוצאה" lead="התהליך מתחיל במספרים שלכם ולא בהמלצות כלליות." /></Reveal>
            <Reveal delay={0.1}>
              <Link to={ROUTE_PATHS.CONTACT} className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3.5 font-bold text-ivory transition hover:bg-teal">מתחילים בשיחה <ArrowLeft className="h-4 w-4" /></Link>
            </Reveal>
          </div>
          <ol className="relative space-y-5 border-r-2 border-dashed border-navy/20 pr-8">
            {processSteps.map((p) => (
              <Reveal key={p.n}>
                <li className="relative rounded-3xl bg-card p-7 shadow-sm">
                  <span className="num absolute -right-[3.05rem] top-7 flex h-9 w-9 items-center justify-center rounded-full bg-navy text-sm font-bold text-ivory ring-8 ring-secondary/60">{p.n}</span>
                  <h3 className="font-display text-2xl font-black text-navy">{p.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{p.text}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ABOUT */}
      <section className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-24 md:py-32 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <div className="relative mx-auto max-w-sm">
            <div className="absolute -bottom-4 -left-4 h-full w-full rounded-[2rem] border-2 border-gold/60" />
            <img src={IMG.BW} alt={advisorInfo.name} loading="lazy" className="relative aspect-[3/4] w-full rounded-[2rem] object-cover object-top" />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <SectionHead eyebrow="מי עומד מאחורי" title={advisorInfo.name} />
          <p className="mt-2 font-display text-xl text-teal">{advisorInfo.title} · {advisorInfo.experience}</p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{advisorInfo.philosophy}</p>
          <ul className="mt-6 grid gap-2 sm:grid-cols-2">
            {advisorInfo.credentials.map((c) => (
              <li key={c.k} className="rounded-xl border border-gold/40 bg-gold/5 px-4 py-3 text-sm"><span className="font-bold text-teal">{c.k}: </span><span className="text-navy">{c.v}</span></li>
            ))}
          </ul>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {advisorInfo.timeline.map((t) => (
              <li key={t.year} className="rounded-2xl border border-border bg-card p-5">
                <p className="num font-display text-2xl font-black text-gold">{t.year}</p>
                <p className="mt-1 text-sm text-navy/80">{t.description}</p>
              </li>
            ))}
          </ul>
          <Link to={ROUTE_PATHS.ABOUT} className="mt-8 inline-flex items-center gap-2 font-bold text-teal hover:text-navy">עוד עליי <ArrowLeft className="h-4 w-4" /></Link>
        </Reveal>
      </section>

      <PrivateMandate />

      {/* TESTIMONIALS */}
      <section className="bg-deep py-24 text-ivory md:py-28">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal><SectionHead light eyebrow="לקוחות מספרים" title="מה אומרים אחרי שהמספרים מסתדרים" /></Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.id} delay={i * 0.08}>
                <figure className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.04] p-7">
                  <span className="font-display text-6xl leading-none text-gold">״</span>
                  <blockquote className="-mt-2 flex-1 leading-relaxed text-ivory/85">{t.content}</blockquote>
                  <figcaption className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-teal font-display text-lg font-bold">{t.name[0]}</span>
                    <span><span className="block font-semibold">{t.name}</span><span className="text-sm text-ivory/50">{t.role}</span></span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 py-24">
        <Reveal>
          <div className="grain relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-navy to-teal p-10 text-ivory md:p-16">
            <div className="relative z-10 grid items-center gap-8 md:grid-cols-[1.4fr_1fr]">
              <div>
                <h2 className="font-display text-4xl font-black text-balance md:text-5xl">מוכנים לראות את התמונה המלאה?</h2>
                <p className="mt-4 max-w-xl text-lg text-ivory/80">שיחת היכרות ראשונה ללא התחייבות. מספרים שמבינים, ותוכנית שאפשר לבצע.</p>
              </div>
              <div className="flex flex-col gap-3">
                <Link to={ROUTE_PATHS.CONTACT} className="rounded-full bg-gold py-4 text-center text-lg font-bold text-deep transition hover:bg-white">קביעת שיחה</Link>
                <a href={`https://wa.me/${COMPANY_INFO.contact.whatsapp}`} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/40 py-4 text-center font-semibold transition hover:bg-white/10">WhatsApp</a>
                <a href={`tel:${COMPANY_INFO.contact.phone}`} className="text-center text-sm text-ivory/80 num" dir="ltr">{COMPANY_INFO.contact.phone}</a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
