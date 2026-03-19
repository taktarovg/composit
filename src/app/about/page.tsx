import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TimelineSection } from "./TimelineSection";
import { ValuesSection } from "./ValuesSection";

export const metadata: Metadata = {
  title: "О группе компаний — ХимСнаб Композит",
  description:
    "История, стратегия и структура группы компаний «ХимСнаб Композит». С 2003 года на рынке композитных материалов. Резидент Сколково.",
};

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-800 to-primary-600 py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            О группе компаний
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-2xl">
            С 2003 года мы развиваем рынок композитных материалов, объединяя
            поставки, производство и технологическую экспертизу.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="pt-20 md:pt-28 pb-10 md:pb-14">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <div className="max-w-3xl">
            <SectionHeading title="Наша миссия" />
            <p className="text-neutral-400 leading-relaxed text-lg">
              Развитие промышленного потенциала России и стран СНГ посредством
              производства конкурентоспособных, качественных изделий из
              композитных материалов. Мы стремимся открывать и модернизировать
              производства, устанавливая стандарты клиентоориентированности на
              рынке композитов.
            </p>
          </div>
        </div>
      </section>

      <ValuesSection />
      <TimelineSection />
    </div>
  );
}
