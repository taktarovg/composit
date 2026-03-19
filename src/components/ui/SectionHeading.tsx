import { ScrollReveal } from "./ScrollReveal";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeading({
  title,
  subtitle,
  centered = false,
  light = false,
}: SectionHeadingProps) {
  return (
    <ScrollReveal className={`mb-10 md:mb-14 ${centered ? "text-center" : ""}`}>
      <h2
        className={`text-3xl md:text-4xl lg:text-[42px] font-bold leading-tight ${
          light ? "text-white" : "text-neutral-600"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg max-w-3xl ${
            centered ? "mx-auto" : ""
          } ${light ? "text-white/80" : "text-neutral-400"}`}
        >
          {subtitle}
        </p>
      )}
    </ScrollReveal>
  );
}
