import { useState } from "react";

/**
 * Displays the researcher's avatar from /assets/profile.png, wrapped in a
 * glassmorphism frame with a soft conic gradient ring and an ambient
 * pulsing glow behind it. If the file is missing or fails to load, it
 * falls back to a clean monogram placeholder instead of a broken image
 * icon — replace public/assets/profile.png with a different image at any
 * time, no code changes needed.
 */
export default function ProfilePhoto() {
  const [errored, setErrored] = useState(false);

  return (
    <div className="relative mx-auto w-full max-w-[320px]">
      {/* Ambient glow — soft, blurred, slowly breathing behind the glass frame */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center" aria-hidden="true">
        <div className="h-[85%] w-[85%] animate-pulse-glow rounded-full bg-signal/35 blur-[64px]" />
        <div className="absolute h-[60%] w-[60%] animate-pulse-glow rounded-full bg-cyan/20 blur-[48px] [animation-delay:1.2s]" />
        <div className="absolute h-[45%] w-[45%] animate-pulse-glow rounded-full bg-violet/20 blur-[40px] [animation-delay:2.4s]" />
      </div>

      {/* Glassmorphism frame */}
      <div className="relative rounded-[32px] border border-white/15 bg-white/[0.06] p-4 shadow-elevate backdrop-blur-xl sm:p-5">
        <div className="pointer-events-none absolute inset-0 rounded-[32px] bg-gradient-to-b from-white/[0.08] to-transparent" aria-hidden="true" />
        <div className="pointer-events-none absolute -inset-px rounded-[32px] ring-1 ring-inset ring-signal/20" aria-hidden="true" />

        {/* Soft conic gradient ring around the circular photo */}
        <div className="relative aspect-square w-full">
          <div
            className="absolute -inset-[3px] rounded-full opacity-70"
            style={{
              background:
                "conic-gradient(from 200deg, #10B981, #22D3EE, #7C3AED, #10B981)",
              filter: "blur(2px)",
            }}
            aria-hidden="true"
          />
          <div className="relative h-full w-full overflow-hidden rounded-full ring-2 ring-ink-950">
            {!errored ? (
              <img
                src="./assets/profile.png"
                alt="Aslam Pathan avatar — Web & API Security Researcher"
                className="h-full w-full object-cover"
                loading="eager"
                onError={() => setErrored(true)}
              />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-ink-800 via-ink-850 to-ink-900">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-signal/25 bg-signal-soft">
                  <span className="font-display text-2xl font-semibold text-signal-bright">AP</span>
                </div>
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-mist-500">
                  Photo not yet added
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="relative mx-auto mt-4 flex w-fit items-center gap-2 rounded-full border border-mist-100/10 bg-ink-900/95 px-3 py-1.5 shadow-card">
        <span className="h-1.5 w-1.5 rounded-full bg-signal-bright animate-blink" aria-hidden="true" />
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-mist-400">
          Researching &amp; Learning
        </span>
      </div>
    </div>
  );
}
