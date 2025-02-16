import type { Metadata } from "next";
import "./globals.css";
import MainHeader from "@/components/MainHeader";
import Footer from "@/components/Footer";
import {
  pretendard,
  productSansBold,
  productSansLight,
  productSansMedium,
  productSansRegular,
  productSansThin,
} from "../../public/fonts/fonts";

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
    <html
      lang="en"
      className={`${pretendard.variable} ${productSansBold.variable} ${productSansLight.variable} ${productSansMedium.variable} ${productSansRegular.variable} ${productSansThin.variable} antialiased`}
    >
      <body>
        <MainHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
