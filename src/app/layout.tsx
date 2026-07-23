import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "John Han's Blog",
  description: "Welcome to John Han's Blog",
  icons: {
    icon: "/assets/images/favicon.ico",
  },
  other: {
    "naver-site-verification": "669d6adfabfa0c933abf0072ff0e1b77bb9f01f3",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
