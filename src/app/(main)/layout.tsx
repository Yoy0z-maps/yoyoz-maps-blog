import "../globals.css";
import MainHeader from "@/container/MainHeader";
import Footer from "@/container/Footer";
import MobileNav from "@/container/MobileNav";
import { ToastContainer } from "react-toastify";

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
