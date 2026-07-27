import type { Metadata } from "next";

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
    </main>
  );
}
