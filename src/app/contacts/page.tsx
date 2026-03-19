import type { Metadata } from "next";
import { MapPin, Phone, Mail } from "lucide-react";
import { OFFICES, COMPANY } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Контакты и филиалы — ХимСнаб Композит",
  description:
    "9 филиалов в России, Беларуси и Казахстане. Москва, Новосибирск, СПб, Екатеринбург, Казань, Краснодар, Красноярск, Минск, Алматы.",
};

export default function ContactsPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-800 to-primary-600 py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Контакты
          </h1>
          <div className="mt-8 flex flex-wrap gap-6">
            <a
              href={`tel:${COMPANY.phoneRaw}`}
              className="flex items-center gap-3 text-white/90 hover:text-white transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span className="text-lg">{COMPANY.phone}</span>
            </a>
            <a
              href={`mailto:${COMPANY.email}`}
              className="flex items-center gap-3 text-white/90 hover:text-white transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span className="text-lg">{COMPANY.email}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Offices Grid */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <SectionHeading
            title="Наши филиалы"
            subtitle="9 офисов и складов в 3 странах"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {OFFICES.map((office) => (
              <div
                key={office.city}
                className="bg-white rounded-2xl p-6 border border-neutral-100 hover:border-primary-200 hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-neutral-600">
                      {office.city}
                    </h3>
                    {office.country && (
                      <span className="text-xs text-primary-500">
                        {office.country}
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-sm text-neutral-400">{office.address}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
