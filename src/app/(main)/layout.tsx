import type { Metadata } from "next";
import "../globals.css";
import MainHeader from "@/components/MainHeader";
import Footer from "@/components/Footer";

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
    <>
      <MainHeader />
      {children}
      <Footer />
    </>
  );
}
