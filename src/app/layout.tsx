import type { Metadata } from "next";
import "./globals.css";
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
  icons: {
    icon: "/assets/images/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${pretendard.variable}`}>
      <body className={`${pretendard.variable} antialiased`}>{children}</body>
    </html>
  );
}
