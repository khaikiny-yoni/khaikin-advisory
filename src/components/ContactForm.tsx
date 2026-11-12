import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { CheckCircle2, Send } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/index';

const TOPICS = [
  'ייעוץ משכנתאות',
  'אשראי חוץ בנקאי',
  'משכנתא הפוכה / פנסיונית',
  'ייעוץ לכלכלת המשפחה',
  'ייעוץ וליווי עסקי',
  'מנדט פרטי',
  'מערכת לניהול תקציב משפחתי',
  'מערכת לניהול חיסכון משפחתי',
  'מערכת לניהול עסקי – הנטו שלי',
  'אחר',
];

const schema = z.object({
  name: z.string().min(2, 'נא להזין שם'),
  phone: z.string().min(9, 'מספר טלפון לא תקין'),
  email: z.string().email('כתובת אימייל לא תקינה').or(z.literal('')),
  topic: z.string().min(1),
  message: z.string().optional(),
});
type FormData = z.infer<typeof schema>;

const ENDPOINT = `https://formsubmit.co/ajax/${COMPANY_INFO.contact.email}`;

const field = 'w-full rounded-xl border border-border bg-background px-4 py-3 text-base outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/20';

export function ContactForm() {
  const [params] = useSearchParams();
  const initialTopic = params.get('topic') ?? 'ייעוץ משכנתאות';
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [fallback, setFallback] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema), defaultValues: { topic: initialTopic } });

  const topicOptions = TOPICS.includes(initialTopic) ? TOPICS : [initialTopic, ...TOPICS];

  const openMailDraft = (d: FormData) => {
    const subject = encodeURIComponent(`פנייה מהאתר: ${d.topic} (${d.name})`);
    const body = encodeURIComponent(`שם: ${d.name}\nטלפון: ${d.phone}\nאימייל: ${d.email || '-'}\nנושא: ${d.topic}\n\n${d.message || ''}`);
    window.location.href = `mailto:${COMPANY_INFO.contact.email}?subject=${subject}&body=${body}`;
  };

  const onSubmit = async (d: FormData) => {
    setSending(true);
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `פנייה מהאתר: ${d.topic} (${d.name})`,
          _template: 'table',
          _captcha: 'false',
          _honey: '',
          שם: d.name,
          טלפון: d.phone,
          אימייל: d.email || '-',
          נושא: d.topic,
          הודעה: d.message || '-',
          ...(d.email ? { _replyto: d.email } : {}),
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || String(data.success) !== 'true') throw new Error('send failed');
      setFallback(false);
    } catch {
      // Safety net: never lose a lead – open a prefilled mail draft instead
      setFallback(true);
      openMailDraft(d);
    } finally {
      setSending(false);
      setSent(true);
    }
  };

  if (sent) {
    return (
      <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="py-10 text-center">
        <CheckCircle2 className="mx-auto h-14 w-14 text-teal" />
        <h3 className="mt-4 font-display text-3xl font-black text-navy">{fallback ? 'כמעט סיימנו' : 'הפנייה התקבלה'}</h3>
        <p className="mx-auto mt-3 max-w-md text-muted-foreground">
          {fallback
            ? 'נפתחה טיוטת מייל מוכנה לשליחה. אם היא לא נפתחה, אפשר לפנות ישירות בוואטסאפ או בטלפון.'
            : 'תודה, הפרטים התקבלו ונחזור אליכם בהקדם. אפשר גם לפנות ישירות בוואטסאפ או בטלפון.'}
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a href={`https://wa.me/${COMPANY_INFO.contact.whatsapp}`} target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#25D366] px-6 py-3 font-bold text-white">WhatsApp</a>
          <a href={`tel:${COMPANY_INFO.contact.phone}`} className="rounded-full border border-navy px-6 py-3 font-bold text-navy">התקשרו</a>
        </div>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-semibold text-navy">שם מלא</label>
          <input id="name" className={field} autoComplete="name" {...register('name')} />
          {errors.name && <p className="mt-1 text-sm text-destructive">{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-navy">טלפון</label>
          <input id="phone" type="tel" dir="ltr" className={`${field} text-right`} autoComplete="tel" {...register('phone')} />
          {errors.phone && <p className="mt-1 text-sm text-destructive">{errors.phone.message}</p>}
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-semibold text-navy">אימייל (לא חובה)</label>
          <input id="email" type="email" dir="ltr" className={`${field} text-right`} autoComplete="email" {...register('email')} />
          {errors.email && <p className="mt-1 text-sm text-destructive">{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="topic" className="mb-2 block text-sm font-semibold text-navy">בנושא</label>
          <select id="topic" className={field} {...register('topic')}>
            {topicOptions.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-semibold text-navy">ספרו בקצרה מה מטריד אתכם</label>
        <textarea id="message" rows={4} className={`${field} resize-none`} {...register('message')} />
      </div>
      <button type="submit" disabled={sending} className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-navy py-4 text-lg font-bold text-ivory transition hover:bg-teal disabled:opacity-60">
        <Send className="h-5 w-5" /> {sending ? 'שולח...' : 'שליחת פנייה'}
      </button>
      <p className="text-xs text-muted-foreground">הפנייה נשלחת למייל של המשרד. הפרטים משמשים לחזרה אליכם בלבד.</p>
    </form>
  );
}
