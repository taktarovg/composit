"use client";

import {
  Heart,
  Users,
  Handshake,
  Target,
  TrendingUp,
  Recycle,
  ShieldCheck,
  Eye,
} from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const values = [
  { icon: Heart, title: "Ориентация на потребителя" },
  { icon: Users, title: "Уважение к личности каждого сотрудника" },
  { icon: Handshake, title: "Создание взаимного доверия" },
  { icon: Target, title: "Достижение результатов командной работой" },
  { icon: TrendingUp, title: "Постоянное развитие и поддержка развития других" },
  { icon: Recycle, title: "Эффективное использование ресурсов" },
  { icon: ShieldCheck, title: "Гарантия качества во всех аспектах" },
  { icon: Eye, title: "Честный и открытый бизнес" },
];

export function ValuesSection() {
  return (
    <section className="pt-10 md:pt-14 pb-20 md:pb-28 bg-neutral-50">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <SectionHeading title="Наши ценности" centered />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {values.map((v, i) => (
            <ScrollReveal key={v.title} delay={i * 0.06}>
              <div className="bg-white rounded-xl p-6 border border-neutral-100 hover:border-primary-200 transition-colors text-center h-full">
                <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mx-auto mb-4">
                  <v.icon className="w-6 h-6 text-primary-500" />
                </div>
                <p className="text-sm font-medium text-neutral-500">
                  {v.title}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
