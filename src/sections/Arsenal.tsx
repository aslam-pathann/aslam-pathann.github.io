import { Code2, Wrench, Terminal, Crosshair, Layers } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import { useGlassHover } from "../hooks/useGlassHover";
import { arsenal } from "../data/content";

const categoryIcons: Record<string, typeof Code2> = {
  Languages: Code2,
  "Security Tools": Wrench,
  "Operating Systems": Terminal,
  Specializations: Crosshair,
  "Other Tools": Layers,
};

function ArsenalCard({ category, items }: { category: string; items: string[] }) {
  const { ref, onMouseMove } = useGlassHover<HTMLDivElement>();
  const Icon = categoryIcons[category] ?? Code2;

  return (
    <div ref={ref} onMouseMove={onMouseMove} className="glass-card h-full rounded-2xl p-6">
      <span className="glass-card-sheen" aria-hidden="true" />
      <div className="relative z-[1] flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-mist-100/10 bg-mist-100/[0.03]">
          <Icon className="h-4.5 w-4.5 text-signal-bright" strokeWidth={1.7} aria-hidden="true" />
        </div>
        <h3 className="font-display text-base font-semibold text-mist-100">{category}</h3>
      </div>
      <div className="relative z-[1] mt-5 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="chip-hover rounded-full border border-mist-100/10 bg-mist-100/[0.02] px-3 py-1.5 font-mono text-xs text-mist-300 hover:border-signal/40 hover:bg-signal-soft hover:text-signal-bright"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Arsenal() {
  const categories = Object.entries(arsenal);

  return (
    <section id="arsenal" className="border-b border-mist-100/[0.06] py-[clamp(3.5rem,6vw,5.5rem)]">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Toolkit"
          title="My Arsenal"
          subtitle="Languages, tools, platforms, and specializations used across security research and testing."
        />

        <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map(([category, items], i) => (
            <Reveal key={category} delay={i * 0.06}>
              <ArsenalCard category={category} items={items} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
