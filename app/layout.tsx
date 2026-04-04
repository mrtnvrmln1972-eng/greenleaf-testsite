import type { Metadata } from "next";
import "./globals.css";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Kamsteeg Tuinen | Hovenier in Breda | Tuinontwerp, aanleg & onderhoud",
  description:
    "Kamsteeg Tuinen is uw hovenier in Breda. Meer dan 25 jaar vakmanschap in tuinontwerp, tuinaanleg en tuinonderhoud. Vraag vrijblijvend advies aan.",
  keywords:
    "hovenier breda, tuinaanleg breda, tuinontwerp, tuinonderhoud, zwemvijver",
  openGraph: {
    title: "Kamsteeg Tuinen | Hovenier in Breda",
    description:
      "Meer dan 25 jaar vakmanschap in tuinontwerp, tuinaanleg en tuinonderhoud in Breda en omgeving.",
    locale: "nl_NL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl" className="h-full">
      <body
        className="min-h-full"
        style={{ fontFamily: '"Roboto", system-ui, sans-serif' }}
        suppressHydrationWarning
      >
        <AnimateOnScroll />
        {children}
      </body>
    </html>
  );
}
