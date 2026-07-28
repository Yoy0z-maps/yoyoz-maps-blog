import type { Metadata } from "next";
import Link from "next/link";
import { MdAddPhotoAlternate } from "react-icons/md";

import NavHighlighter from "@/components/NavHighlighter";
import TripWorldMap from "@/components/trip/TripWorldMap";

export const metadata: Metadata = {
  title: "Trip | John Han's Blog",
  description: "Interactive world map for the trip section.",
};

export default function TripPage() {
  return (
    <main className="trip-page relative h-[100svh] w-full overflow-hidden transition-colors duration-500">
      <NavHighlighter path="/trip" />
      <div className="trip-page-glow absolute inset-0" />
      <section className="relative flex h-full w-full items-center justify-center px-4 pb-24 pt-24 sm:px-10">
        <TripWorldMap />
      </section>
      <Link
        className="absolute bottom-28 right-6 z-30 inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/80 px-5 py-3 text-sm font-bold text-slate-800 shadow-[0_16px_50px_rgba(166,109,87,0.2)] backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:text-[#d95658] dark:border-white/10 dark:bg-[#151515]/85 dark:text-white dark:hover:text-[#fd7778] md:bottom-8 md:right-8"
        href="/trip/upload"
      >
        <MdAddPhotoAlternate size={20} />
        여행 사진 추가
      </Link>
    </main>
  );
}
