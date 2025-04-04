import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Head from "next/head";

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
      <Head>
        <meta
          name="naver-site-verification"
          content="669d6adfabfa0c933abf0072ff0e1b77bb9f01f3"
        />
      </Head>
      <body className={`${pretendard.variable} antialiased`}>{children}</body>
    </html>
  );
}
