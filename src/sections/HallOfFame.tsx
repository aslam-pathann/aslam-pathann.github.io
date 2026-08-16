import { Award, ExternalLink } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import { useGlassHover } from "../hooks/useGlassHover";
import { hallOfFame } from "../data/content";

function HallOfFameCard({ entry }: { entry: (typeof hallOfFame)[number] }) {
  const { ref, onMouseMove } = useGlassHover<HTMLAnchorElement>();

  return (
    <a
      ref={ref}
      onMouseMove={onMouseMove}
      href={entry.href}
      target="_blank"
      rel="noopener noreferrer"
      className="glass-card bracket-frame group flex h-full flex-col justify-between rounded-2xl p-6"
    >
      <span className="bracket-tr" aria-hidden="true" />
      <span className="bracket-bl" aria-hidden="true" />
      <span className="glass-card-sheen" aria-hidden="true" />
      <div className="relative z-[1]">
        <div className="flex items-start justify-between gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-signal/20 bg-signal-soft">
            <Award className="h-5 w-5 text-signal-bright" strokeWidth={1.6} aria-hidden="true" />
          </div>
          <ExternalLink
            className="h-4 w-4 text-mist-500 transition-colors group-hover:text-signal-bright"
            aria-hidden="true"
          />
        </div>
        <h3 className="mt-5 font-display text-lg font-semibold text-mist-100">{entry.org}</h3>
        <p className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-mist-500">
          {entry.note}
        </p>
        <p className="mt-4 text-sm leading-relaxed text-mist-400">
          Public recognition for a responsibly disclosed security finding.
        </p>
      </div>
      <span className="relative z-[1] mt-6 inline-flex items-center gap-1.5 font-mono text-xs font-medium text-signal-bright">
        {entry.cta}
        <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
      </span>
    </a>
  );
}

export default function HallOfFame() {
  return (
    <section id="hall-of-fame" className="border-b border-mist-100/[0.06] py-[clamp(3.5rem,6vw,5.5rem)]">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Recognition"
          title="Hall of Fame & Recognition"
          subtitle="Responsible disclosure acknowledgements and public security recognition."
        />

        <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {hallOfFame.map((entry, i) => (
            <Reveal key={entry.org} delay={i * 0.08} as="li" className="list-none">
              <HallOfFameCard entry={entry} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
