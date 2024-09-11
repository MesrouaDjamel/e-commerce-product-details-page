import type { Metadata } from "next";
import "./globals.css";
import { Kumbh_Sans } from "next/font/google";

const kumbhSans = Kumbh_Sans({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "E-commerce Product Page",
  description:
    "E-commerce product page solution challenge proposed by FrontEndMentor.io",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${kumbhSans.className} antialiased`}>{children}</body>
    </html>
  );
}
