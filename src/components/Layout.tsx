import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ROUTE_PATHS, COMPANY_INFO } from '@/lib/index';
import { IMAGES } from '@/assets/images';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigationItems = [
    { path: ROUTE_PATHS.HOME, label: 'דף הבית' },
    { path: ROUTE_PATHS.ABOUT, label: 'אודות' },
    { path: ROUTE_PATHS.SERVICES, label: 'שירותים' },
    { path: ROUTE_PATHS.MORTGAGE, label: 'משכנתאות' },
    { path: ROUTE_PATHS.FAMILY_FINANCE, label: 'כלכלת המשפחה' },
    { path: ROUTE_PATHS.CREDIT, label: 'אשראי' },
    { path: ROUTE_PATHS.TESTIMONIALS, label: 'המלצות' },
    { path: ROUTE_PATHS.CONTACT, label: 'צור קשר' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground" dir="rtl">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4">
          <div className="flex h-20 items-center justify-between">
            <NavLink to={ROUTE_PATHS.HOME} className="flex items-center gap-3">
              <img 
                src={IMAGES.PNG_1_51} 
                alt="Khaikin Private Advisory Logo" 
                className="h-16 w-auto"
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold text-primary">
                  {COMPANY_INFO.name}
                </span>
                <span className="text-xs text-muted-foreground">
                  {COMPANY_INFO.slogan}
                </span>
              </div>
            </NavLink>

            <nav className="hidden lg:flex items-center gap-1">
              {navigationItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                      isActive
                        ? 'bg-accent text-accent-foreground shadow-md'
                        : 'text-foreground/80 hover:text-foreground hover:bg-muted'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="תפריט"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden border-t border-border/40 bg-background"
            >
              <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
                {navigationItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 ${
                        isActive
                          ? 'bg-accent text-accent-foreground shadow-md'
                          : 'text-foreground/80 hover:text-foreground hover:bg-muted'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-border/40 bg-card mt-24">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src={IMAGES.PNG_1_51} 
                  alt="Khaikin Private Advisory Logo" 
                  className="h-12 w-auto"
                />
              </div>
              <h3 className="text-lg font-bold mb-2 text-primary">
                {COMPANY_INFO.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {COMPANY_INFO.slogan}
              </p>
              <p className="text-sm text-muted-foreground">
                {COMPANY_INFO.advisor.name} - {COMPANY_INFO.advisor.title}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                {COMPANY_INFO.advisor.experience}
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">פרטי קשר</h4>
              <div className="space-y-3">
                <a
                  href={`tel:${COMPANY_INFO.contact.phone}`}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  <Phone size={16} />
                  {COMPANY_INFO.contact.phone}
                </a>
                <a
                  href={`mailto:${COMPANY_INFO.contact.email}`}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  <Mail size={16} />
                  {COMPANY_INFO.contact.email}
                </a>
              </div>
              <div className="mt-6">
                <h5 className="text-sm font-medium mb-2">שעות פעילות</h5>
                <p className="text-xs text-muted-foreground">
                  {COMPANY_INFO.hours.weekdays}
                </p>
                <p className="text-xs text-muted-foreground">
                  {COMPANY_INFO.hours.friday}
                </p>
                <p className="text-xs text-muted-foreground">
                  {COMPANY_INFO.hours.saturday}
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">קישורים מהירים</h4>
              <nav className="flex flex-col gap-2">
                <NavLink
                  to={ROUTE_PATHS.ABOUT}
                  className="text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  אודות
                </NavLink>
                <NavLink
                  to={ROUTE_PATHS.SERVICES}
                  className="text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  שירותים
                </NavLink>
                <NavLink
                  to={ROUTE_PATHS.TESTIMONIALS}
                  className="text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  המלצות לקוחות
                </NavLink>
                <NavLink
                  to={ROUTE_PATHS.CONTACT}
                  className="text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  צור קשר
                </NavLink>
              </nav>
            </div>
          </div>

          <div className="border-t border-border/40 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-right">
              © 2026 {COMPANY_INFO.name}. כל הזכויות שמורות.
            </p>
            <a
              href="/privacy-policy.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-accent transition-colors"
            >
              מדיניות פרטיות
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
