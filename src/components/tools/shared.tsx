export const fmt = (n: number) => Math.round(n).toLocaleString('he-IL');
export const money = (n: number) => `₪${fmt(n)}`;

export function Segmented<T extends string | number>({
  options,
  value,
  onChange,
  label,
}: {
  options: { value: T; label: string }[];
  value: T;
  onChange: (v: T) => void;
  label: string;
}) {
  return (
    <div role="radiogroup" aria-label={label} className="flex flex-wrap gap-2">
      {options.map((o) => {
        const on = o.value === value;
        return (
          <button
            key={String(o.value)}
            type="button"
            role="radio"
            aria-checked={on}
            onClick={() => onChange(o.value)}
            className={`rounded-full border px-4 py-2 text-sm font-semibold transition-all ${
              on
                ? 'border-navy bg-navy text-ivory shadow-md'
                : 'border-border bg-card text-navy/80 hover:border-teal hover:text-teal'
            }`}
          >
            {o.label}
          </button>
        );
      })}
    </div>
  );
}

export function RangeField({
  label,
  value,
  min,
  max,
  step,
  onChange,
  format,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
  format: (v: number) => string;
}) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div>
      <div className="mb-3 flex items-baseline justify-between gap-4">
        <label className="text-sm font-semibold text-navy">{label}</label>
        <span className="num font-display text-2xl font-bold text-navy">{format(value)}</span>
      </div>
      <input
        type="range"
        className="kpa-range"
        min={min}
        max={max}
        step={step}
        value={value}
        style={{ ['--pct' as string]: `${pct}%` }}
        onChange={(e) => onChange(Number(e.target.value))}
        aria-label={label}
      />
    </div>
  );
}

export function Disclaimer({ children }: { children: React.ReactNode }) {
  return <p className="mt-6 text-xs leading-relaxed text-muted-foreground">{children}</p>;
}
