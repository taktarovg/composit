import type { Metadata } from "next";
import { Factory, Truck, FlaskConical, ShieldCheck, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Производство стеклопластика — ХСК Инновация | ГК «ХимСнаб Композит»",
  description:
    "Собственное производство композитных настилов, стеклопластиковых профилей и листов. 3 площадки. Торговая марка RUSGRATE.",
};

const products = [
  "Композитные настилы",
  "Стеклопластиковые листы",
  "Противоскользящие системы",
  "Водоотводные лотки",
  "Стеклопластиковые профили",
];

const advantages = [
  {
    icon: Factory,
    title: "Основание и опыт",
    text: "Успешно работаем в сфере композитных материалов с 2003 года. С 2016 года — собственное производство под торговой маркой RUSGRATE.",
  },
  {
    icon: Truck,
    title: "Логистика и охват",
    text: "Доставка по России и СНГ. Склады в 8 городах России, а также в Минске, Усть-Каменогорске и Алматы.",
  },
  {
    icon: FlaskConical,
    title: "Передовые технологии",
    text: "Быстрая адаптация производства под различные виды продукции. Совместная разработка композиций с учёными Новосибирского Академгородка.",
  },
  {
    icon: ShieldCheck,
    title: "Гарантия качества",
    text: "Непрерывное совершенствование производства, повышение производительности и расширение ассортимента.",
  },
];

const plants = [
  { location: "Московская область", country: "Россия" },
  { location: "Новосибирск", country: "Россия" },
  { location: "Усть-Каменогорск", country: "Казахстан" },
];

export default function ProductionPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-800 to-primary-600 py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <div className="inline-block bg-white/15 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6 border border-white/20">
            <span className="text-xs font-semibold text-white">
              Резидент Сколково
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            ХСК Инновация
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-2xl">
            Производственное подразделение группы. Собственное производство
            изделий из стеклопластика под торговой маркой RUSGRATE.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <SectionHeading
            title="Наша продукция"
            subtitle="С 2016 года мы производим:"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product) => (
              <div
                key={product}
                className="bg-white rounded-xl p-6 border border-neutral-100 hover:border-primary-200 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center mb-4">
                  <Factory className="w-5 h-5 text-primary-500" />
                </div>
                <h3 className="text-base font-semibold text-neutral-600">
                  {product}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <SectionHeading title="Преимущества производства" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {advantages.map((adv) => (
              <div
                key={adv.title}
                className="bg-neutral-50 rounded-2xl p-7 border border-neutral-100"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-500 flex items-center justify-center mb-5">
                  <adv.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-neutral-600 mb-3">
                  {adv.title}
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {adv.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plants */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <SectionHeading title="Производственные площадки" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {plants.map((plant) => (
              <div
                key={plant.location}
                className="bg-white rounded-2xl p-7 border border-neutral-100 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-primary-50 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-7 h-7 text-primary-500" />
                </div>
                <h3 className="text-lg font-bold text-neutral-600">
                  {plant.location}
                </h3>
                <p className="text-sm text-neutral-400 mt-1">
                  {plant.country}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
