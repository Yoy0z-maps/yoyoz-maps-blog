import About from "@/components/About";
import Contact from "@/components/Contact";
import Designs from "@/components/Designs";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import NavHighlighter from "@/components/NavHighlighter";
import Technologies from "@/components/Technologies";

export default function Home() {
  return (
    <div
      className={`bg-light-bg sm:px-0 px-6 dark:bg-dark-bg flex flex-col w-full h-full relative transition-all duration-500 pt-28 items-center overflow-x-hidden`}
    >
      <NavHighlighter path="/" />
      <Hero />
      <About />
      <Technologies />
      <Designs />
      <Experience />
      <Contact />
    </div>
  );
}
