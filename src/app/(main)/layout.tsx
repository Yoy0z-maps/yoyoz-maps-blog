import "../globals.css";
import MainHeader from "@/container/MainHeader";
import Footer from "@/container/Footer";
import { ToastContainer } from "react-toastify";
import dynamic from "next/dynamic";

const MobileNav = dynamic(() => import("@/container/MobileNav"), {
  ssr: false,
  loading: () => null,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <MainHeader />
      <ToastContainer />
      {children}
      <MobileNav />
      <Footer />
    </>
  );
}
