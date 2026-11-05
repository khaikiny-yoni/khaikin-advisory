import { Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/index';
import { PageHero } from '@/components/PageHero';
import { ContactForm } from '@/components/ContactForm';

export default function Contact() {
  const rows = [
    { icon: Phone, label: 'טלפון', value: COMPANY_INFO.contact.phone, href: `tel:${COMPANY_INFO.contact.phone}`, ltr: true },
    { icon: MessageCircle, label: 'וואטסאפ', value: 'שליחת הודעה', href: `https://wa.me/${COMPANY_INFO.contact.whatsapp}` },
    { icon: Mail, label: 'אימייל', value: COMPANY_INFO.contact.email, href: `mailto:${COMPANY_INFO.contact.email}`, ltr: true },
    { icon: MapPin, label: 'כתובת', value: COMPANY_INFO.contact.address },
  ];
  return (
    <div>
      <PageHero eyebrow="צור קשר" title="בואו נדבר על המספרים שלכם" lead="שיחת היכרות ראשונה ללא התחייבות. השאירו פרטים ונחזור אליכם." />
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[2rem] border border-border bg-card p-7 shadow-[0_30px_80px_-40px_rgba(10,42,85,.35)] md:p-10">
          <ContactForm />
        </div>
        <aside className="space-y-4">
          {rows.map((r) => {
            const inner = (
              <>
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy text-ivory"><r.icon className="h-5 w-5" /></span>
                <span>
                  <span className="block text-sm text-muted-foreground">{r.label}</span>
                  <span className={`block font-bold text-navy ${r.ltr ? 'num' : ''}`} dir={r.ltr ? 'ltr' : undefined}>{r.value}</span>
                </span>
              </>
            );
            return r.href ? (
              <a key={r.label} href={r.href} target={r.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition hover:border-teal">{inner}</a>
            ) : (
              <div key={r.label} className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5">{inner}</div>
            );
          })}
          <div className="rounded-2xl bg-navy p-6 text-ivory">
            <p className="mb-3 flex items-center gap-2 font-bold"><Clock className="h-5 w-5 text-gold" /> שעות פעילות</p>
            <p className="text-ivory/75">{COMPANY_INFO.hours.weekdays}</p>
            <p className="text-ivory/75">{COMPANY_INFO.hours.friday}</p>
            <p className="text-ivory/75">{COMPANY_INFO.hours.saturday}</p>
          </div>
        </aside>
      </section>
    </div>
  );
}
