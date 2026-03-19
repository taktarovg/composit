"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function AboutSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <ScrollReveal>
              <p className="text-sm font-semibold text-primary-500 uppercase tracking-wider mb-3">
                О группе компаний
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-600 leading-tight mb-6">
                Один из ведущих игроков рынка композитных материалов
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="text-neutral-400 leading-relaxed mb-4">
                Группа компаний «ХимСнаб Композит» — один из ведущих игроков
                рынка композитных материалов в России и странах СНГ.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-neutral-400 leading-relaxed mb-4">
                Мы специализируемся на комплексных поставках сырья, компонентов
                и оборудования для промышленных предприятий.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="text-neutral-400 leading-relaxed">
                Наша экспертиза и производственные компетенции помогают
                предприятиям внедрять технологии, оптимизировать процессы и
                выходить на новый уровень качества продукции.
              </p>
            </ScrollReveal>
          </div>

          {/* Visual */}
          <ScrollReveal delay={0.2} direction="right">
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-100 to-primary-50 rounded-3xl p-10 aspect-square flex items-center justify-center">
                {/* Puzzle visual */}
                <div className="grid grid-cols-2 gap-3 w-48 h-48 md:w-64 md:h-64">
                  <div className="bg-accent-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-white/30 text-4xl">&#10047;</span>
                  </div>
                  <div className="bg-primary-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-white/30 text-4xl">&#9883;</span>
                  </div>
                  <div className="bg-green-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-white/30 text-4xl">&#9880;</span>
                  </div>
                  <div className="bg-gold-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-white/30 text-4xl">&#9733;</span>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl p-4 border border-neutral-100">
                <p className="text-2xl font-bold text-primary-500">
                  С 2003
                </p>
                <p className="text-xs text-neutral-400">года на рынке</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
