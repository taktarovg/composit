"use client";

import { Globe, Warehouse, Cpu, ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

const priorities = [
  {
    icon: Globe,
    title: "Международное развитие",
    description: "Расширение прямых партнёрств и увеличение объёмов поставок.",
    iconBg: "bg-primary-100",
    iconColor: "text-primary-500",
  },
  {
    icon: Warehouse,
    title: "Усиление инфраструктуры",
    description: "Масштабирование складской и логистической системы.",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    icon: Cpu,
    title: "Развитие производственных компетенций",
    description:
      "Поддержка внедрения технологий и участие в отраслевых проектах.",
    iconBg: "bg-accent-100",
    iconColor: "text-accent-500",
  },
];

export function StrategySection() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <SectionHeading
          title="Стратегия и развитие"
          subtitle="Расширение международных поставок и укрепление инфраструктуры композитной отрасли."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {priorities.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.12}>
              <div className="group bg-white rounded-2xl p-7 border border-neutral-100 hover:border-primary-200 hover:shadow-[0_8px_24px_rgba(24,150,163,0.1)] transition-all duration-300 h-full">
                <div
                  className={`w-12 h-12 rounded-xl ${item.iconBg} flex items-center justify-center mb-5`}
                >
                  <item.icon className={`w-6 h-6 ${item.iconColor}`} />
                </div>
                <h3 className="text-lg font-bold text-neutral-600 mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-10 text-center">
            <Button href="/about" variant="ghost">
              Подробнее о стратегии
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
