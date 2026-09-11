"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

export default function TripPageChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  return <div className={pathname === "/trip/upload" ? "hidden lg:contents" : "contents"}>{children}</div>;
}
