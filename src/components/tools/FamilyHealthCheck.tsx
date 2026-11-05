import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { RotateCcw } from 'lucide-react';
import { ROUTE_PATHS } from '@/lib/index';
import { Disclaimer } from './shared';

const QUESTIONS = [
  {
    q: 'האם אתם יודעים בדיוק כמה כסף נכנס ויוצא מהמשפחה בחודש?',
    a: ['כן, בדיוק', 'בערך', 'ממש לא'],
  },
  {
    q: 'איך נראה חשבון הבנק בסוף חודש רגיל?',
    a: ['בפלוס', 'על הקו', 'במינוס'],
  },
  {
    q: 'האם יש לכם קרן חירום של שלושה חודשי הוצאות לפחות?',
    a: ['כן', 'חלקית', 'אין'],
  },
  {
    q: 'כמה מההכנסה נטו הולך על החזרי חובות והלוואות (כולל משכנתא)?',
    a: ['עד כ-30%', 'בין 30% ל-40%', 'מעל 40%'],
  },
  {
    q: 'האם מחלקים את התקציב מראש, או שמוציאים "מה שנשאר"?',
    a: ['תקציב מראש', 'חלקית', 'בלי תקציב'],
  },
];

const TIERS = [
  { min: 0, title: 'מצב דחוף', color: '#b3412f', text: 'הכסף מנהל אתכם ולא להפך. החדשות הטובות: זה הכי ניתן לשינוי כשמתחילים מניתוח מסודר של התנועות. כדאי להתחיל בהקדם.' },
  { min: 4, title: 'יש על מה לעבוד', color: '#c9a961', text: 'הבסיס קיים אבל יש נקודות בזבוז ופערים שאפשר לסגור. תקציב מסודר ויעדים ברורים יעשו הבדל גדול.' },
  { min: 7, title: 'בכיוון טוב', color: '#17697a', text: 'אתם מנהלים נכון. הצעד הבא הוא לשפר: חיסכון ממוקד יעדים, ובדיקה של ההתחייבויות הגדולות כמו המשכנתא.' },
  { min: 9, title: 'שליטה מצוינת', color: '#0a2a55', text: 'ניהול מסודר ויציב. כדאי לוודא שההון עובד בשבילכם: תמהיל משכנתא, חיסכון והשקעות.' },
];

export function FamilyHealthCheck() {
  const [answers, setAnswers] = useState<(number | null)[]>(Array(QUESTIONS.length).fill(null));
  const done = answers.every((a) => a !== null);
  const score = answers.reduce<number>((s, a) => s + (a === null ? 0 : 2 - a), 0);
  const tier = [...TIERS].reverse().find((t) => score >= t.min)!;
  const C = 2 * Math.PI * 54;

  if (done) {
    return (
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="grid items-center gap-8 md:grid-cols-[auto_1fr]">
        <div className="relative mx-auto h-44 w-44">
          <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90">
            <circle cx="60" cy="60" r="54" fill="none" stroke="var(--border)" strokeWidth="10" />
            <motion.circle
              cx="60" cy="60" r="54" fill="none" stroke={tier.color} strokeWidth="10" strokeLinecap="round"
              strokeDasharray={C}
              initial={{ strokeDashoffset: C }}
              animate={{ strokeDashoffset: C * (1 - score / 10) }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="font-display text-5xl font-black text-navy num">{score}</span>
            <span className="text-xs text-muted-foreground">מתוך 10</span>
          </div>
        </div>
        <div>
          <p className="font-display text-3xl font-black" style={{ color: tier.color }}>{tier.title}</p>
          <p className="mt-3 max-w-xl text-lg leading-relaxed text-muted-foreground">{tier.text}</p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Link to={ROUTE_PATHS.CONTACT + '?topic=ייעוץ לכלכלת המשפחה'} className="rounded-full bg-navy px-6 py-3 font-semibold text-ivory transition hover:bg-teal">
              נשמח לנתח יחד את המצב
            </Link>
            <button type="button" onClick={() => setAnswers(Array(QUESTIONS.length).fill(null))} className="inline-flex items-center gap-2 text-sm font-semibold text-teal">
              <RotateCcw className="h-4 w-4" /> מחדש
            </button>
          </div>
        </div>
        <div className="md:col-span-2">
          <Disclaimer>שאלון קצר להערכה ראשונית בלבד. אינו תחליף לניתוח מלא של תנועות הבנק וכרטיסי האשראי.</Disclaimer>
        </div>
      </motion.div>
    );
  }

  const answered = answers.filter((a) => a !== null).length;
  return (
    <div>
      <div className="mb-6 flex items-center gap-4">
        <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-border">
          <div className="h-full bg-teal transition-all duration-500" style={{ width: `${(answered / QUESTIONS.length) * 100}%` }} />
        </div>
        <span className="num text-sm text-muted-foreground">{answered}/{QUESTIONS.length}</span>
      </div>
      <div className="space-y-6">
        {QUESTIONS.map((item, qi) => (
          <fieldset key={qi}>
            <legend className="mb-3 font-semibold text-navy">
              <span className="num ml-2 text-teal">{qi + 1}.</span>{item.q}
            </legend>
            <div className="flex flex-wrap gap-2">
              {item.a.map((label, ai) => {
                const on = answers[qi] === ai;
                return (
                  <button
                    key={ai}
                    type="button"
                    aria-pressed={on}
                    onClick={() => setAnswers((p) => p.map((v, i) => (i === qi ? ai : v)))}
                    className={`rounded-full border px-5 py-2 text-sm font-semibold transition-all ${on ? 'border-teal bg-teal text-white shadow-md' : 'border-border bg-card text-navy/80 hover:border-teal'}`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </fieldset>
        ))}
      </div>
    </div>
  );
}
