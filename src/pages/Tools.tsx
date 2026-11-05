import { CtaBand, PageHero } from '@/components/PageHero';
import { SectionHead, Reveal } from '@/components/Reveal';
import { ToolsLab } from '@/components/tools/ToolsLab';
import { ReverseMortgageSim } from '@/components/tools/ReverseMortgageSim';

export default function Tools() {
  return (
    <div>
      <PageHero eyebrow="כלים וחישובים" title="תמונת מצב ראשונה, בלי לחכות לפגישה" lead="כלים אינטראקטיביים שמראים איפה אתם עומדים. הם נועדו להמחשה, וניתוח מדויק נעשה על הנתונים האמיתיים שלכם." />
      <section className="mx-auto max-w-7xl px-5 py-20 md:py-24"><ToolsLab /></section>
      <section className="bg-secondary/60 py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal><SectionHead eyebrow="משכנתא הפוכה / פנסיונית" title="מה קורה לחוב עם השנים?" lead="המחשה של ריבית דריבית בהלוואה שאין עליה החזר חודשי." /></Reveal>
          <div className="mt-10 rounded-[2rem] border border-border bg-card p-6 md:p-10"><ReverseMortgageSim /></div>
        </div>
      </section>
      <CtaBand title="רוצים לנתח את זה על הנתונים שלכם?" topic="כלים וחישובים" />
    </div>
  );
}
