import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GreenLeaf – Tuinspecialisten",
  description: "Professionele tuinontwerp, tuinonderhoud en bestrating door GreenLeaf.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className="h-full">
      <body className={`${inter.className} min-h-full flex flex-col`} suppressHydrationWarning>{children}</body>
    </html>
  );
}
