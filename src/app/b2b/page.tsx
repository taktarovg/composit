import type { Metadata } from "next";
import { Percent, Truck, CreditCard, Globe } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Работа с бизнесом — Оптовые поставки композитов | ХимСнаб Композит",
  description:
    "Оптовые поставки композитных материалов из РФ, Турции и Китая. Скидки до 30%, гибкая оплата, техническая поддержка.",
};

const benefits = [
  {
    icon: Percent,
    title: "Скидка до −30%",
    text: "Оптовая цена значительно ниже розничной. Индивидуальные условия для производств с регулярными закупками.",
  },
  {
    icon: Truck,
    title: "Прямые поставки",
    text: "Поставки из РФ, Турции и Китая. Собственная складская и логистическая инфраструктура.",
  },
  {
    icon: CreditCard,
    title: "Гибкая оплата",
    text: "Отсрочка платежа по согласованию. Удобные схемы для регулярных закупок.",
  },
  {
    icon: Globe,
    title: "Техническая поддержка",
    text: "Помощь в подборе материалов, консультации технологов, база знаний по композитам.",
  },
];

export default function B2bPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-800 to-primary-600 py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Работа с бизнесом
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-2xl">
            Реализуем материалы розничным и оптовым покупателям. Индивидуальные
            условия для производств с регулярными закупками.
          </p>
          <div className="mt-8">
            <Button href="/contacts">Получить оптовые условия</Button>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <SectionHeading title="Ключевые преимущества" centered />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="bg-white rounded-2xl p-7 border border-neutral-100 hover:border-primary-200 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-500 flex items-center justify-center mb-5">
                  <b.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-neutral-600 mb-3">
                  {b.title}
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {b.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
