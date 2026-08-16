import { ArrowDown, ArrowRight } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import { useGlassHover } from "../hooks/useGlassHover";
import { methodology } from "../data/content";

function StageCard({ index, stage }: { index: number; stage: string }) {
  const { ref, onMouseMove } = useGlassHover<HTMLDivElement>();

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      className="glass-card flex w-full items-center gap-4 rounded-xl px-4 py-4 lg:flex-col lg:gap-2 lg:py-5 lg:text-center"
    >
      <span className="glass-card-sheen" aria-hidden="true" />
      <span className="relative z-[1] font-mono text-xs text-signal-bright">
        {String(index + 1).padStart(2, "0")}
      </span>
      <span className="relative z-[1] font-display text-sm font-medium text-mist-100 sm:text-base">
        {stage}
      </span>
    </div>
  );
}

export default function Methodology() {
  return (
    <section className="border-b border-mist-100/[0.06] py-[clamp(3.5rem,6vw,5.5rem)]">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Methodology"
          title="My Research Approach"
          subtitle="A consistent, repeatable workflow applied to every target — from first recon to responsible disclosure."
        />

        <div className="mt-9 flex flex-col items-stretch gap-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-0">
          {methodology.map((stage, i) => (
            <Reveal key={stage} delay={i * 0.06} className="flex flex-col items-center lg:flex-1 lg:min-w-[150px]">
              <div className="flex w-full flex-col items-center gap-3 lg:flex-row lg:justify-center">
                <StageCard index={i} stage={stage} />
              </div>
              {i < methodology.length - 1 && (
                <div className="flex h-8 items-center justify-center text-signal/50 lg:h-auto lg:w-8">
                  <ArrowDown className="h-4 w-4 lg:hidden" aria-hidden="true" />
                  <ArrowRight className="hidden h-4 w-4 lg:block" aria-hidden="true" />
                </div>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
