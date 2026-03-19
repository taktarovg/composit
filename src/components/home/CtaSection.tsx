"use client";

import { ArrowRight, Briefcase, FileCheck, Lightbulb, MapPin } from "lucide-react";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const ctaCards = [
  {
    title: "Работа с бизнесом (B2B)",
    description: "Оптовые поставки, гибкая оплата, скидки до 30%",
    href: "/b2b",
    icon: Briefcase,
    variant: "primary" as const,
  },
  {
    title: "Приглашение на торги",
    description: "ГОЗ, закрытые и открытые процедуры",
    href: "/goz",
    icon: FileCheck,
    variant: "graphite" as const,
  },
  {
    title: "Деятельность",
    description: "Выставки, образование, социальная ответственность",
    href: "/activities",
    icon: Lightbulb,
    variant: "primary" as const,
  },
  {
    title: "Контакты",
    description: "9 филиалов, офисы и склады",
    href: "/contacts",
    icon: MapPin,
    variant: "graphite" as const,
  },
];

const variants = {
  primary: {
    bg: "bg-primary-50/60",
    border: "border-primary-100",
    hoverBorder: "hover:border-primary-300",
    iconBg: "bg-primary-100",
    iconColor: "text-primary-600",
    arrow: "group-hover:border-primary-300 group-hover:text-primary-500",
  },
  graphite: {
    bg: "bg-neutral-50/80",
    border: "border-neutral-200",
    hoverBorder: "hover:border-neutral-400",
    iconBg: "bg-neutral-200",
    iconColor: "text-neutral-600",
    arrow: "group-hover:border-neutral-400 group-hover:text-neutral-600",
  },
};

export function CtaSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-600 mb-3">
            Клиентам
          </h2>
          <p className="text-neutral-400 mb-10 max-w-xl">
            Выберите удобный формат сотрудничества
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ctaCards.map((card, i) => {
            const v = variants[card.variant];
            return (
              <ScrollReveal key={card.title} delay={i * 0.1}>
                <Link
                  href={card.href}
                  className={`group block rounded-2xl ${v.bg} border ${v.border} ${v.hoverBorder} p-7 min-h-[220px] flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]`}
                >
                  <div>
                    <div
                      className={`w-11 h-11 rounded-xl ${v.iconBg} flex items-center justify-center mb-5`}
                    >
                      <card.icon className={`w-5 h-5 ${v.iconColor}`} />
                    </div>
                    <h3 className="text-base font-bold text-neutral-600 mb-2">
                      {card.title}
                    </h3>
                    <p className="text-sm text-neutral-400 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                  <div className={`w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center mt-6 ${v.arrow} group-hover:bg-white transition-all`}>
                    <ArrowRight className="w-4 h-4 text-neutral-300 transition-colors" />
                  </div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
