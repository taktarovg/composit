"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TIMELINE } from "@/lib/constants";

export function TimelineSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <SectionHeading
          title="Формирование и развитие"
          subtitle="Активно развиваемся с 2003 года и не планируем останавливаться"
          centered
        />

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-primary-200 -translate-x-1/2" />

          <div className="flex flex-col gap-10">
            {TIMELINE.map((item, i) => (
              <motion.div
                key={`${item.year}-${i}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className={`relative flex items-start gap-6 min-h-[60px] ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary-500 border-4 border-primary-100 z-10 mt-1.5" />

                {/* Content */}
                <div
                  className={`ml-14 md:ml-0 md:w-[calc(50%-24px)] ${
                    i % 2 === 0
                      ? "md:text-right md:pr-8"
                      : "md:text-left md:pl-8 md:ml-auto"
                  }`}
                >
                  <span className="text-xl font-bold text-primary-500">
                    {item.year}
                  </span>
                  <p className="text-sm text-neutral-400 mt-1">
                    {item.event}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
