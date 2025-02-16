import About from "@/components/About";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Project from "@/components/Project";
import Technologies from "@/components/Technologies";
import Contact from "@/components/Contact";

export default function Page() {
  return (
    <div className="overflow-x-hidden antialiased">
      <div className="fixed top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <div className="container mx-auto px-8 mt-32">
        <Hero />
        <About />
        <Technologies />
        <Experience />
        <Project />
        <Contact />
      </div>
    </div>
  );
}
