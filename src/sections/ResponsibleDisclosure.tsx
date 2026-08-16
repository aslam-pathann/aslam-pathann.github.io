import { ShieldCheck } from "lucide-react";
import Reveal from "../components/Reveal";
import { useGlassHover } from "../hooks/useGlassHover";

export default function ResponsibleDisclosure() {
  const { ref, onMouseMove } = useGlassHover<HTMLDivElement>();

  return (
    <section className="border-b border-mist-100/[0.06] py-[clamp(3.5rem,6vw,5.5rem)]">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <Reveal>
          <div
            ref={ref}
            onMouseMove={onMouseMove}
            className="glass-card relative overflow-hidden rounded-3xl px-6 py-12 text-center sm:px-14 sm:py-16"
          >
            <span className="glass-card-sheen" aria-hidden="true" />
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 50% 0%, #10B981, transparent 60%)",
              }}
              aria-hidden="true"
            />
            <div className="relative z-[1]">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-signal/25 bg-signal-soft shadow-glow-signal">
                <ShieldCheck className="h-6 w-6 text-signal-bright" strokeWidth={1.6} aria-hidden="true" />
              </div>
              <h2 className="mt-6 font-display text-3xl font-semibold text-mist-100 sm:text-4xl">
                Responsible Disclosure
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-balance text-lg leading-relaxed text-mist-300">
                Security research is about finding vulnerabilities responsibly, validating impact
                safely, and giving organizations the opportunity to fix security issues before
                they can be abused.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
