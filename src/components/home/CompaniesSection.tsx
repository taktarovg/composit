"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GROUP_COMPANIES } from "@/lib/constants";

const colorMap = {
  primary: {
    bg: "bg-primary-50",
    border: "border-primary-200",
    icon: "bg-primary-500",
    hover: "hover:border-primary-400 hover:shadow-[0_8px_24px_rgba(24,150,163,0.15)]",
  },
  accent: {
    bg: "bg-accent-50",
    border: "border-accent-200",
    icon: "bg-accent-500",
    hover: "hover:border-accent-400 hover:shadow-[0_8px_24px_rgba(210,86,70,0.15)]",
  },
  green: {
    bg: "bg-green-50",
    border: "border-green-200",
    icon: "bg-green-500",
    hover: "hover:border-green-400 hover:shadow-[0_8px_24px_rgba(149,171,99,0.15)]",
  },
  gold: {
    bg: "bg-yellow-50",
    border: "border-yellow-200",
    icon: "bg-gold-500",
    hover: "hover:border-yellow-400 hover:shadow-[0_8px_24px_rgba(208,168,35,0.15)]",
  },
} as const;

export function CompaniesSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <SectionHeading
          title="Компании группы"
          subtitle="Группа компаний «ХимСнаб Композит» объединяет несколько направлений, формируя единую инфраструктуру поставок, производства и технологической поддержки."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {GROUP_COMPANIES.map((company, i) => {
            const colors = colorMap[company.color];
            return (
              <ScrollReveal key={company.name} delay={i * 0.1}>
                <Link
                  href={company.href}
                  target={company.external ? "_blank" : undefined}
                  className={`group block rounded-2xl border ${colors.border} ${colors.bg} p-6 transition-all duration-300 hover:-translate-y-1 ${colors.hover} h-full`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl ${colors.icon} flex items-center justify-center mb-5`}
                  >
                    <div className="grid grid-cols-2 gap-0.5 w-6 h-6">
                      <div className="bg-white/60 rounded-sm" />
                      <div className="bg-white/80 rounded-sm" />
                      <div className="bg-white/40 rounded-sm" />
                      <div className="bg-white/70 rounded-sm" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-neutral-600 mb-2">
                    {company.name}
                  </h3>
                  <p className="text-sm text-neutral-400 mb-6">
                    {company.description}
                  </p>

                  <div className="w-9 h-9 rounded-full border border-neutral-200 flex items-center justify-center group-hover:border-neutral-400 group-hover:bg-white transition-all">
                    <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-neutral-600 transition-colors" />
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
