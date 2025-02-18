import type { Metadata } from "next";
import "../globals.css";
import MainHeader from "@/container/MainHeader";
import Footer from "@/container/Footer";

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
