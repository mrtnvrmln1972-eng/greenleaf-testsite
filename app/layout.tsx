import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Kamsteeg Tuinen | Hovenier in Breda | Tuinontwerp, aanleg & onderhoud",
  description:
    "Kamsteeg Tuinen is uw hovenier in Breda. Meer dan 25 jaar vakmanschap in tuinontwerp, tuinaanleg en tuinonderhoud. Vraag vrijblijvend advies aan.",
  keywords:
    "hovenier breda, tuinaanleg breda, tuinontwerp, tuinonderhoud, zwemvijver, hovenier",
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
    <html lang="nl" className={`${inter.variable} ${playfair.variable} h-full`}>
      <body className="font-sans min-h-full flex flex-col" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
