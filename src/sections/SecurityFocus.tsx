import { Globe, Webhook, Bug, Swords, Bot } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import { useGlassHover } from "../hooks/useGlassHover";
import { securityFocus } from "../data/content";

const icons = [Globe, Webhook, Bug, Swords, Bot];

// Very low-saturation accent cycling — adds subtle visual variety across
// the grid without turning the cards colorful or cartoonish.
const accents = [
  { icon: "text-signal-bright", box: "border-signal/20 bg-signal-soft" },
  { icon: "text-cyan", box: "border-cyan/20 bg-cyan-soft" },
  { icon: "text-violet", box: "border-violet/25 bg-violet-soft" },
  { icon: "text-cyan", box: "border-cyan/20 bg-cyan-soft" },
  { icon: "text-signal-bright", box: "border-signal/20 bg-signal-soft" },
];

function FocusCard({
  title,
  description,
  Icon,
  accent,
}: {
  title: string;
  description: string;
  Icon: typeof Globe;
  accent: (typeof accents)[number];
}) {
  const { ref, onMouseMove } = useGlassHover<HTMLDivElement>();

  return (
    <div ref={ref} onMouseMove={onMouseMove} className="glass-card bracket-frame h-full rounded-2xl p-6">
      <span className="bracket-tr" aria-hidden="true" />
      <span className="bracket-bl" aria-hidden="true" />
      <span className="glass-card-sheen" aria-hidden="true" />
      <div className="relative z-[1]">
        <div className={`flex h-11 w-11 items-center justify-center rounded-xl border ${accent.box}`}>
          <Icon className={`h-5 w-5 ${accent.icon}`} strokeWidth={1.6} aria-hidden="true" />
        </div>
        <h3 className="mt-5 font-display text-lg font-semibold text-mist-100">{title}</h3>
        <p className="mt-2.5 text-sm leading-relaxed text-mist-400">{description}</p>
      </div>
    </div>
  );
}

export default function SecurityFocus() {
  return (
    <section id="focus" className="border-b border-mist-100/[0.06] py-[clamp(3.5rem,6vw,5.5rem)]">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow="Focus Areas" title="Security Focus" />

        <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {securityFocus.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <FocusCard
                title={item.title}
                description={item.description}
                Icon={icons[i] ?? Globe}
                accent={accents[i] ?? accents[0]}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
