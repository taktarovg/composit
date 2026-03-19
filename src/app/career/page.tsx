import type { Metadata } from "next";
import {
  TrendingUp,
  Users,
  ShieldCheck,
  GraduationCap,
  Banknote,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Карьера — ХимСнаб Композит",
  description:
    "Присоединяйтесь к команде профессионалов в области композитных материалов. Карьерный рост, обучение, стабильная зарплата.",
};

const benefits = [
  { icon: TrendingUp, title: "Карьерный рост", text: "Развитие от начального уровня через специалиста к руководящим позициям" },
  { icon: Users, title: "Коллектив профессионалов", text: "Работа с вовлечёнными, преданными делу профессионалами" },
  { icon: ShieldCheck, title: "Социальные гарантии", text: "Защита сотрудников согласно законодательству" },
  { icon: GraduationCap, title: "Обучение и стажировки", text: "Поддержка профессионального развития" },
  { icon: Banknote, title: "Стабильная зарплата", text: "Выплата два раза в месяц с премиями и бонусами" },
];

export default function CareerPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-800 to-primary-600 py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Карьера в компании
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-2xl">
            ХимСнаб Композит — команда единомышленников, активных и эффективных
            профессионалов, ориентированных на общий результат.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <SectionHeading title="Что мы предлагаем" centered />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="bg-white rounded-2xl p-7 border border-neutral-100 text-center hover:border-primary-200 transition-colors"
              >
                <div className="w-14 h-14 rounded-full bg-primary-50 flex items-center justify-center mx-auto mb-4">
                  <b.icon className="w-7 h-7 text-primary-500" />
                </div>
                <h3 className="text-base font-bold text-neutral-600 mb-2">
                  {b.title}
                </h3>
                <p className="text-sm text-neutral-400">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10 text-center">
          <h2 className="text-3xl font-bold text-neutral-600 mb-4">
            Присоединяйтесь к нашей команде
          </h2>
          <p className="text-neutral-400 mb-8 max-w-xl mx-auto">
            Если вам близки наши ценности — ознакомьтесь с вакансиями и
            заполните форму отклика.
          </p>
          <a
            href={`mailto:${process.env.NEXT_PUBLIC_EMAIL || "market@igcmail.ru"}?subject=Отклик на вакансию`}
            className="inline-flex items-center gap-2 rounded-full bg-primary-500 px-8 py-4 text-sm font-semibold text-white hover:bg-primary-600 transition-colors"
          >
            Отправить резюме
          </a>
        </div>
      </section>
    </div>
  );
}
