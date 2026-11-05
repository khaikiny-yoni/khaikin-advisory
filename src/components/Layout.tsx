import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import { ChevronDown, Mail, MapPin, Menu, Phone, X } from 'lucide-react';
import { ROUTE_PATHS, COMPANY_INFO } from '@/lib/index';
import { IMG } from '@/data/index';

interface LayoutProps {
  children: React.ReactNode;
}

const serviceMenu = [
  { path: ROUTE_PATHS.MORTGAGE, label: 'ייעוץ משכנתאות', sub: 'רכישה, מחזור ותמהיל' },
  { path: ROUTE_PATHS.CREDIT, label: 'אשראי חוץ בנקאי', sub: 'כשהבנק אומר לא' },
  { path: ROUTE_PATHS.REVERSE_MORTGAGE, label: 'משכנתא הפוכה / פנסיונית', sub: 'להפוך הון בנכס לתזרים' },
  { path: ROUTE_PATHS.FAMILY_FINANCE, label: 'כלכלת המשפחה', sub: 'יציאה ממינוס ותקציב' },
  { path: ROUTE_PATHS.BUSINESS, label: 'ליווי עסקי', sub: 'רווחיות ונטו לבעל העסק' },
];

const mainNav = [
  { path: ROUTE_PATHS.SYSTEMS, label: 'המערכות שלנו' },
  { path: ROUTE_PATHS.TOOLS, label: 'כלים וחישובים' },
  { path: ROUTE_PATHS.ABOUT, label: 'אודות' },
  { path: ROUTE_PATHS.TESTIMONIALS, label: 'המלצות' },
];

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);
  return null;
}

const linkCls = ({ isActive }: { isActive: boolean }) =>
  `relative px-3 py-2 text-[15px] font-medium transition-colors ${
    isActive ? 'text-teal' : 'text-navy/80 hover:text-teal'
  }`;

export function Layout({ children }: LayoutProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30 });

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);
  useEffect(() => setOpen(false), [pathname]);

  const inServices = serviceMenu.some((s) => pathname.startsWith(s.path));

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground" dir="rtl">
      <ScrollToTop />
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:right-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-navy focus:px-4 focus:py-2 focus:text-ivory">
        דלג לתוכן
      </a>

      <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'bg-ivory/90 shadow-[0_8px_30px_-20px_rgba(10,42,85,.5)] backdrop-blur-xl' : 'bg-ivory'}`}>
        <motion.div className="absolute inset-x-0 bottom-0 h-[2px] origin-right bg-gradient-to-l from-teal to-gold" style={{ scaleX: progress }} />
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5">
          <Link to={ROUTE_PATHS.HOME} className="flex items-center gap-3" aria-label="KHAIKIN Private Advisory – דף הבית">
            <img src={IMG.LOGO} alt="KHAIKIN Private Advisory" className="h-14 w-auto mix-blend-multiply" />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="ניווט ראשי">
            <div className="group relative">
              <NavLink to={ROUTE_PATHS.SERVICES} className={() => linkCls({ isActive: inServices || pathname === ROUTE_PATHS.SERVICES })}>
                <span className="inline-flex items-center gap-1">
                  שירותים <ChevronDown className="h-4 w-4 transition group-hover:rotate-180" />
                </span>
              </NavLink>
              <div className="invisible absolute right-0 top-full w-80 translate-y-2 pt-3 opacity-0 transition-all duration-200 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <div className="rounded-2xl border border-border bg-card p-2 shadow-2xl">
                  {serviceMenu.map((s) => (
                    <Link key={s.path} to={s.path} className="block rounded-xl px-4 py-3 transition hover:bg-teal/10">
                      <span className="block font-semibold text-navy">{s.label}</span>
                      <span className="block text-sm text-muted-foreground">{s.sub}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            {mainNav.map((i) => (
              <NavLink key={i.path} to={i.path} className={linkCls}>
                {i.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link to={ROUTE_PATHS.CONTACT} className="hidden rounded-full bg-navy px-6 py-2.5 text-sm font-bold text-ivory transition hover:bg-teal sm:inline-flex">
              קביעת שיחה
            </Link>
            <button onClick={() => setOpen(!open)} className="rounded-lg p-2 text-navy lg:hidden" aria-label={open ? 'סגירת תפריט' : 'פתיחת תפריט'} aria-expanded={open}>
              {open ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden border-t border-border bg-ivory lg:hidden">
              <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4" aria-label="תפריט נייד">
                <p className="px-3 pt-2 text-xs font-bold tracking-widest text-teal">שירותים</p>
                {serviceMenu.map((s) => (
                  <NavLink key={s.path} to={s.path} className={({ isActive }) => `rounded-xl px-3 py-3 text-lg font-semibold ${isActive ? 'bg-teal/10 text-teal' : 'text-navy'}`}>
                    {s.label}
                  </NavLink>
                ))}
                <div className="my-2 h-px bg-border" />
                {mainNav.map((i) => (
                  <NavLink key={i.path} to={i.path} className={({ isActive }) => `rounded-xl px-3 py-3 text-lg font-semibold ${isActive ? 'bg-teal/10 text-teal' : 'text-navy'}`}>
                    {i.label}
                  </NavLink>
                ))}
                <Link to={ROUTE_PATHS.CONTACT} className="mt-3 rounded-full bg-navy py-3.5 text-center text-lg font-bold text-ivory">
                  קביעת שיחה
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main id="main" className="flex-1">
        {children}
      </main>

      <footer className="grain relative overflow-hidden bg-deep text-ivory">
        <div className="relative z-10 mx-auto max-w-7xl px-5 pt-20 pb-10">
          <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
            <div>
              <div className="inline-block rounded-2xl bg-[#f6f6f6] p-3">
                <img src={IMG.LOGO} alt="KHAIKIN Private Advisory" className="h-24 w-auto" />
              </div>
              <p className="mt-6 max-w-xs font-display text-xl leading-snug text-ivory/90">{COMPANY_INFO.slogan}</p>
              <p className="mt-3 text-sm text-ivory/50">{COMPANY_INFO.advisor.name} · {COMPANY_INFO.advisor.title}</p>
            </div>

            <div>
              <h4 className="mb-5 font-sans text-sm font-bold tracking-widest text-gold">שירותים</h4>
              <ul className="space-y-3 text-ivory/75">
                {serviceMenu.map((s) => (
                  <li key={s.path}><Link to={s.path} className="transition hover:text-white">{s.label}</Link></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-5 font-sans text-sm font-bold tracking-widest text-gold">באתר</h4>
              <ul className="space-y-3 text-ivory/75">
                <li><Link to={ROUTE_PATHS.SYSTEMS} className="transition hover:text-white">המערכות שלנו</Link></li>
                <li><Link to={ROUTE_PATHS.TOOLS} className="transition hover:text-white">כלים וחישובים</Link></li>
                <li><Link to={ROUTE_PATHS.ABOUT} className="transition hover:text-white">אודות</Link></li>
                <li><Link to={ROUTE_PATHS.TESTIMONIALS} className="transition hover:text-white">המלצות</Link></li>
                <li><Link to={ROUTE_PATHS.CONTACT} className="transition hover:text-white">צור קשר</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="mb-5 font-sans text-sm font-bold tracking-widest text-gold">יצירת קשר</h4>
              <ul className="space-y-4 text-ivory/75">
                <li><a href={`tel:${COMPANY_INFO.contact.phone}`} className="flex items-center gap-3 transition hover:text-white"><Phone size={18} className="text-teal-light" /><span className="num" dir="ltr">{COMPANY_INFO.contact.phone}</span></a></li>
                <li><a href={`mailto:${COMPANY_INFO.contact.email}`} className="flex items-center gap-3 transition hover:text-white"><Mail size={18} className="text-teal-light" />{COMPANY_INFO.contact.email}</a></li>
                <li className="flex items-start gap-3"><MapPin size={18} className="mt-1 shrink-0 text-teal-light" />{COMPANY_INFO.contact.address}</li>
              </ul>
              <div className="mt-6 text-sm text-ivory/50">
                <p>{COMPANY_INFO.hours.weekdays}</p>
                <p>{COMPANY_INFO.hours.friday}</p>
                <p>{COMPANY_INFO.hours.saturday}</p>
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-ivory/45 md:flex-row">
            <p>© 2026 {COMPANY_INFO.name}. כל הזכויות שמורות.</p>
            <p className="max-w-xl text-center md:text-right">האמור באתר נועד למידע כללי ואינו מהווה ייעוץ אישי או הצעה מחייבת. החישובים והכלים להמחשה בלבד.</p>
            <a href="/privacy-policy.html" target="_blank" rel="noopener noreferrer" className="transition hover:text-white">מדיניות פרטיות</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
