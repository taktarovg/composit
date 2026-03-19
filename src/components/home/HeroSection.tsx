"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { COMPANY } from "@/lib/constants";

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-end pt-20 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-800 via-primary-600 to-primary-500">
        {/* Decorative shapes */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-[10%] right-[15%] w-96 h-96 rounded-full bg-primary-300 blur-3xl" />
          <div className="absolute bottom-[20%] right-[30%] w-72 h-72 rounded-full bg-primary-400 blur-2xl" />
          <div className="absolute top-[40%] left-[5%] w-56 h-56 rounded-full bg-accent-500 blur-3xl opacity-30" />
        </div>
        {/* Pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] w-full px-5 md:px-10 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-end">
          {/* Main hero content */}
          <div className="lg:col-span-2 pb-8">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1]"
            >
              <span className="text-primary-200">Партнёр</span> для развития
              <br />
              композитных производств
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl"
            >
              {COMPANY.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Button href="/about">
                О компании
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button variant="outline" href="/contacts">
                Связаться с нами
              </Button>
            </motion.div>
          </div>

          {/* News sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="hidden lg:flex flex-col gap-4 pb-8"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10">
              <p className="text-xs text-primary-200 mb-2">2025</p>
              <p className="text-sm font-semibold text-white leading-snug">
                Заключение контракта с ICE CITY на эксклюзивную дистрибуцию
                в Казахстане
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10">
              <p className="text-xs text-primary-200 mb-2">2024</p>
              <p className="text-sm font-semibold text-white leading-snug">
                Получение статуса резидента Сколково — ХСК Инновация
              </p>
            </div>
          </motion.div>
        </div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-4"
        >
          {[
            { label: "О компании", href: "/about" },
            { label: "Продукция", href: "/production" },
            { label: "Каталог", href: "/b2b" },
            { label: "Карьера", href: "/career" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-5 flex flex-col justify-between min-h-[120px] border border-white/15 hover:bg-white/20 hover:border-white/30 transition-all group"
            >
              <span className="text-sm font-semibold text-white">
                {link.label}
              </span>
              <div className="w-8 h-8 rounded-full border border-white/40 flex items-center justify-center mt-auto group-hover:bg-white/20 transition-colors">
                <ArrowRight className="w-4 h-4 text-white" />
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
