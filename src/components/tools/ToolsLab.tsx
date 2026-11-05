import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MortgageCalculator } from './MortgageCalculator';
import { BusinessNetCalculator } from './BusinessNetCalculator';
import { FamilyHealthCheck } from './FamilyHealthCheck';

const TABS = [
  { id: 'family', label: 'בריאות כלכלית למשפחה', hint: '5 שאלות · דקה' },
  { id: 'mortgage', label: 'מחשבון משכנתא', hint: 'החזר וריבית' },
  { id: 'business', label: 'הנטו מהעסק', hint: 'עוסק מורשה / זעיר / פטור' },
];

export function ToolsLab({ defaultTab = 'family', dark = false }: { defaultTab?: string; dark?: boolean }) {
  return (
    <Tabs defaultValue={defaultTab} dir="rtl" className="w-full">
      <TabsList className="mb-8 flex h-auto w-full flex-wrap justify-start gap-2 bg-transparent p-0">
        {TABS.map((t) => (
          <TabsTrigger
            key={t.id}
            value={t.id}
            className={`flex h-auto flex-col items-start gap-0.5 rounded-2xl border px-5 py-3 text-right transition-all data-[state=active]:shadow-lg ${
              dark
                ? 'border-white/15 bg-white/5 text-ivory/80 data-[state=active]:border-gold data-[state=active]:bg-white/10 data-[state=active]:text-ivory'
                : 'border-border bg-card text-navy/80 data-[state=active]:border-navy data-[state=active]:bg-navy data-[state=active]:text-ivory'
            }`}
          >
            <span className="text-base font-bold">{t.label}</span>
            <span className="text-xs font-normal opacity-70">{t.hint}</span>
          </TabsTrigger>
        ))}
      </TabsList>

      <div className="rounded-[2rem] border border-border bg-card p-6 shadow-[0_30px_80px_-40px_rgba(10,42,85,0.35)] md:p-10">
        <TabsContent value="family" className="mt-0">
          <FamilyHealthCheck />
        </TabsContent>
        <TabsContent value="mortgage" className="mt-0">
          <MortgageCalculator />
        </TabsContent>
        <TabsContent value="business" className="mt-0">
          <BusinessNetCalculator />
        </TabsContent>
      </div>
    </Tabs>
  );
}
