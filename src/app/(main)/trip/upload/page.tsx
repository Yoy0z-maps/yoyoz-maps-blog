import type { Metadata } from "next";

import NavHighlighter from "@/components/NavHighlighter";
import TripUploadForm from "@/components/trip/TripUploadForm";

export const metadata: Metadata = {
  title: "Upload Trip | John Han's Blog",
  description: "Add a new travel memory with photos, a date, and a place.",
};

export default function TripUploadPage() {
  return (
    <main className="relative min-h-[100svh] w-full overflow-hidden bg-[#f5ede4] bg-[linear-gradient(180deg,rgba(255,255,255,0.72),rgba(255,255,255,0.94))] px-4 pb-32 pt-28 transition-colors duration-500 dark:bg-[#050505] dark:bg-[linear-gradient(180deg,rgba(3,3,3,0.7),rgba(3,3,3,0.94))] sm:px-8 sm:pt-32 lg:px-10">
      <NavHighlighter path="/trip" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(253,97,98,0.12),transparent_58%)] dark:bg-[radial-gradient(circle_at_center,rgba(253,97,98,0.16),transparent_58%)]" />
      <section className="relative">
        <TripUploadForm />
      </section>
    </main>
  );
}
