import Image from "next/image";
import Hero from "./components/home/Hero";
import ImpactStats from "./components/home/ImpactStats";
import FeaturedPrograms from "./components/home/FeaturedPrograms";
import Testimonials from "./components/home/Testimonials";
import Gallery from "./components/home/Gallery";
import Partners from "./components/home/Partners";
import CTA from "./components/home/CTA";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <ImpactStats />
      <FeaturedPrograms />
      <Testimonials />
      <Gallery />
      <Partners />
      <CTA />
    </main>
  );
}
