import type { Metadata } from "next";
import "./globals.css";
import MainHeader from "@/components/MainHeader";
import Footer from "@/components/Footer";
import localFont from "next/font/local";

const pretendard = localFont({
  src: "../../public/fonts/pretendard-variable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: "John Han's Blog",
  description: "Welcome to John Han's Blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${pretendard.variable} antialiased`}>
      <body>
        <MainHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
