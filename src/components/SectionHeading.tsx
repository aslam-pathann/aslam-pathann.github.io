import Reveal from "./Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: SectionHeadingProps) {
  return (
    <Reveal className={align === "center" ? "text-center" : "text-left"}>
      <div
        className={`flex items-center gap-3 font-mono text-xs uppercase tracking-[0.28em] text-signal ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        <span className="accent-line" />
        {eyebrow}
      </div>
      <h2 className="mt-3 font-display text-3xl font-semibold text-mist-100 sm:text-4xl text-balance">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-2.5 max-w-2xl text-mist-400 ${align === "center" ? "mx-auto" : ""}`}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
