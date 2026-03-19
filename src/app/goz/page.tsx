import type { Metadata } from "next";
import { FileCheck, Clock, Shield, Handshake } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "ГОЗ — Государственный оборонный заказ | ХимСнаб Композит",
  description:
    "Участие в закупках, подготовка документов, подача заявок на электронных торговых площадках. Сопровождение до исполнения контракта.",
};

const features = [
  { icon: Shield, title: "Готовность к участию", text: "В закрытых и открытых процедурах" },
  { icon: FileCheck, title: "Опыт подготовки", text: "Заявок и техпредложений" },
  { icon: Clock, title: "Своевременная подача", text: "Документов и соблюдение сроков" },
  { icon: Handshake, title: "Сопровождение", text: "До исполнения контракта" },
];

export default function GozPage() {
  return (
    <div className="pt-24">
      <section className="bg-gradient-to-br from-primary-800 to-primary-600 py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Государственный оборонный заказ
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-2xl">
            Участвуем в закупках, готовим документы, подаём заявки на электронных
            торговых площадках и исполняем контракты.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <SectionHeading title="Наши преимущества" centered />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-white rounded-2xl p-7 border border-neutral-100 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-primary-50 flex items-center justify-center mx-auto mb-4">
                  <f.icon className="w-7 h-7 text-primary-500" />
                </div>
                <h3 className="text-base font-bold text-neutral-600 mb-2">
                  {f.title}
                </h3>
                <p className="text-sm text-neutral-400">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
