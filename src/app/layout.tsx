import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ГК «ХимСнаб Композит» — Поставки сырья и производство композитных материалов",
  description:
    "Группа компаний «ХимСнаб Композит» — ведущий поставщик композитных материалов в России и СНГ. Поставки сырья, производство стеклопластика, логистика. 9 филиалов, 3 страны.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
