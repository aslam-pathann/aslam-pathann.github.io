import { Layers3 } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import { useGlassHover } from "../hooks/useGlassHover";
import { platforms } from "../data/content";

function PlatformCard({ name, note }: { name: string; note: string }) {
  const { ref, onMouseMove } = useGlassHover<HTMLDivElement>();

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      className="glass-card flex h-full flex-col justify-between gap-6 rounded-2xl p-5"
    >
      <span className="glass-card-sheen" aria-hidden="true" />
      <Layers3 className="relative z-[1] h-5 w-5 text-signal-bright" strokeWidth={1.6} aria-hidden="true" />
      <div className="relative z-[1]">
        <h3 className="font-display text-base font-semibold text-mist-100">{name}</h3>
        <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-mist-500">{note}</p>
      </div>
    </div>
  );
}

export default function Platforms() {
  return (
    <section className="border-b border-mist-100/[0.06] py-[clamp(3.5rem,6vw,5.5rem)]">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Practice"
          title="Platforms & Practice"
          subtitle="Used for learning, practical security research, vulnerability research, and hands-on practice."
        />

        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {platforms.map((platform, i) => (
            <Reveal key={platform.name} delay={i * 0.05}>
              <PlatformCard name={platform.name} note={platform.note} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
