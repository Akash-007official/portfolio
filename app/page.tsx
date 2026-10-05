import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import About from "@/components/About";
import WhatIDo from "@/components/WhatIDo";
import SelectedWork from "@/components/SelectedWork";
import NL2PCaseStudy from "@/components/NL2PCaseStudy";
import Journey from "@/components/Journey";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Experience />

      <Hero />

      <TechMarquee />

      <About />

      <WhatIDo />

      <SelectedWork />

      <NL2PCaseStudy />

      <Journey />

      <Skills />

      <Contact />
    </main>
  );
}