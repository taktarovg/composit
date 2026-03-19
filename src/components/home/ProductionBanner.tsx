"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function ProductionBanner() {
  return (
    <section className="py-10 md:py-14">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-800 via-primary-600 to-primary-500 p-10 md:p-16 min-h-[400px] flex flex-col justify-end"
        >
          {/* Decorative */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-[10%] right-[10%] w-80 h-80 rounded-full bg-white blur-3xl" />
            <div className="absolute bottom-[10%] right-[30%] w-60 h-60 rounded-full bg-primary-200 blur-2xl" />
          </div>

          {/* Skolkovo badge */}
          <div className="absolute top-6 right-6 bg-white/15 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
            <span className="text-xs font-semibold text-white">
              Резидент Сколково
            </span>
          </div>

          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
              Собственное производство композитных материалов
            </h2>
            <p className="text-white/70 text-base md:text-lg mb-8 max-w-xl">
              3 производственных площадки. Стеклопластиковые настилы, профили
              и листы под торговой маркой RUSGRATE.
            </p>
            <Button href="/production" variant="outline">
              Подробнее
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
