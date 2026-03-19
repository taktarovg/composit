"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X, Search, Phone } from "lucide-react";
import { NAV_ITEMS, COMPANY } from "@/lib/constants";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-[0_2px_16px_rgba(0,0,0,0.08)]"
          : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image
              src="/images/logos/main-logo.png"
              alt="ХимСнаб Композит"
              width={270}
              height={75}
              className="h-[72px] w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  pathname === item.href
                    ? "text-primary-500 bg-primary-50"
                    : "text-neutral-500 hover:text-primary-500 hover:bg-primary-50"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${COMPANY.phoneRaw}`}
              className="hidden md:flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-primary-500 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>{COMPANY.phone}</span>
            </a>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-neutral-100 transition-colors"
              aria-label="Меню"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-neutral-500" />
              ) : (
                <Menu className="w-6 h-6 text-neutral-500" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-neutral-100">
          <nav className="mx-auto max-w-[1440px] px-5 py-4 flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-3 text-base font-medium rounded-xl transition-colors ${
                  pathname === item.href
                    ? "text-primary-500 bg-primary-50"
                    : "text-neutral-500 hover:text-primary-500 hover:bg-primary-50"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={`tel:${COMPANY.phoneRaw}`}
              className="mt-3 flex items-center gap-2 px-4 py-3 text-base font-medium text-primary-500"
            >
              <Phone className="w-5 h-5" />
              {COMPANY.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
