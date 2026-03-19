import Link from "next/link";
import { Phone, Mail, Send, MessageCircle } from "lucide-react";
import { COMPANY, GROUP_COMPANIES, NAV_ITEMS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-neutral-700 text-white">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Logo & Legal */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="grid grid-cols-2 gap-0.5 w-9 h-9">
                <div className="bg-accent-500 rounded-sm" />
                <div className="bg-primary-500 rounded-sm" />
                <div className="bg-green-500 rounded-sm" />
                <div className="bg-gold-500 rounded-sm" />
              </div>
              <div className="leading-tight">
                <span className="text-base font-bold block">ХИМСНАБ</span>
                <span className="text-xs text-neutral-300 block">
                  группа компаний
                </span>
              </div>
            </div>
            <p className="text-sm text-neutral-300 leading-relaxed">
              {COMPANY.legalName}
              <br />
              ИНН: {COMPANY.inn}
              <br />
              ОГРН: {COMPANY.ogrn}
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-300 mb-4">
              Разделы
            </h3>
            <nav className="flex flex-col gap-2">
              {NAV_ITEMS.filter((i) => i.href !== "/").map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-neutral-300 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Group companies */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-300 mb-4">
              Группа компаний
            </h3>
            <div className="flex flex-col gap-2">
              {GROUP_COMPANIES.map((company) => (
                <Link
                  key={company.name}
                  href={company.href}
                  target={company.external ? "_blank" : undefined}
                  className="text-sm text-neutral-300 hover:text-white transition-colors"
                >
                  {company.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 4: Contacts */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-300 mb-4">
              Связаться с нами
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href={`tel:${COMPANY.phoneRaw}`}
                className="flex items-center gap-2 text-sm text-white hover:text-primary-300 transition-colors"
              >
                <Phone className="w-4 h-4" />
                {COMPANY.phone}
              </a>
              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-center gap-2 text-sm text-white hover:text-primary-300 transition-colors"
              >
                <Mail className="w-4 h-4" />
                {COMPANY.email}
              </a>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href={COMPANY.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-neutral-600 flex items-center justify-center hover:bg-green-500 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href={COMPANY.socials.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-neutral-600 flex items-center justify-center hover:bg-primary-500 transition-colors"
                aria-label="Telegram"
              >
                <Send className="w-5 h-5" />
              </a>
              <a
                href={COMPANY.socials.vk}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-neutral-600 flex items-center justify-center hover:bg-primary-500 transition-colors"
                aria-label="VK"
              >
                <span className="text-sm font-bold">VK</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-neutral-600 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-400">
            &copy; {new Date().getFullYear()} {COMPANY.legalName}. Все права
            защищены.
          </p>
          <Link
            href="/privacy"
            className="text-xs text-neutral-400 hover:text-white transition-colors"
          >
            Политика конфиденциальности
          </Link>
        </div>
      </div>
    </footer>
  );
}
