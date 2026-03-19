"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GROUP_COMPANIES } from "@/lib/constants";

export function CompaniesSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <SectionHeading
          title="Компании группы"
          subtitle="Группа компаний «ХимСнаб Композит» объединяет несколько направлений, формируя единую инфраструктуру поставок, производства и технологической поддержки."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {GROUP_COMPANIES.map((company, i) => (
            <ScrollReveal key={company.name} delay={i * 0.1}>
              <Link
                href={company.href}
                target={company.external ? "_blank" : undefined}
                className="group block rounded-2xl border border-neutral-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.12)] shadow-[0_4px_16px_rgba(0,0,0,0.06)] h-full"
              >
                <div className="h-20 flex items-center mb-5">
                  <Image
                    src={company.logo}
                    alt={company.name}
                    width={200}
                    height={60}
                    className="h-14 w-auto object-contain"
                  />
                </div>

                <p className="text-sm text-neutral-400 mb-6">
                  {company.description}
                </p>

                <div className="w-9 h-9 rounded-full border border-neutral-200 flex items-center justify-center group-hover:border-primary-400 group-hover:bg-primary-50 transition-all">
                  <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-primary-500 transition-colors" />
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
