"use client";

import { MapPin } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { OFFICES } from "@/lib/constants";

export function GeographySection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <SectionHeading
          title="География присутствия"
          subtitle="9 филиалов в России, Беларуси и Казахстане обеспечивают своевременные поставки по всему СНГ."
          centered
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {OFFICES.map((office, i) => (
            <ScrollReveal key={office.city} delay={i * 0.06}>
              <div className="flex items-start gap-3 rounded-xl bg-neutral-50 p-5 border border-neutral-100 hover:border-primary-200 hover:bg-primary-50/30 transition-all">
                <div className="w-9 h-9 rounded-lg bg-primary-100 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-primary-500" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-neutral-600">
                    {office.city}
                    {office.country && (
                      <span className="ml-2 text-xs font-normal text-primary-500">
                        {office.country}
                      </span>
                    )}
                  </h3>
                  <p className="text-xs text-neutral-400 mt-1">
                    {office.address}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
