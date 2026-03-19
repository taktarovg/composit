import type { Metadata } from "next";
import { Presentation, BookOpen, Heart } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Деятельность — ХимСнаб Композит",
  description:
    "Выставки, образовательные мероприятия, социальная ответственность. Развиваемся и совершенствуемся вместе.",
};

const activities = [
  {
    icon: Presentation,
    title: "Выставочная деятельность",
    items: [
      "Постоянный экспонент крупнейших выставок России",
      "Участник международных выставок, форумов и конференций",
      "Не пропускаем ни одного значимого события в композитном мире",
    ],
  },
  {
    icon: BookOpen,
    title: "Образовательная деятельность",
    items: [
      "Организация регулярных практических мероприятий совместно с партнёрами",
      "Накопленный опыт, которым мы с удовольствием делимся",
      "Обучение клиентов технологиям и работе с материалами",
    ],
  },
  {
    icon: Heart,
    title: "Социальная ответственность",
    items: [
      "Поддержка детского спорта",
      "Участие в благотворительных акциях",
      "Озеленение и экологические инициативы",
    ],
  },
];

export default function ActivitiesPage() {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-primary-800 to-primary-600 py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Деятельность
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-2xl">
            Развиваемся и совершенствуемся в бизнесе вместе
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {activities.map((a) => (
              <div
                key={a.title}
                className="bg-white rounded-2xl p-7 border border-neutral-100"
              >
                <div className="w-14 h-14 rounded-full bg-primary-50 flex items-center justify-center mb-6">
                  <a.icon className="w-7 h-7 text-primary-500" />
                </div>
                <h3 className="text-xl font-bold text-neutral-600 mb-4">
                  {a.title}
                </h3>
                <ul className="space-y-3">
                  {a.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-neutral-400 leading-relaxed flex items-start gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
