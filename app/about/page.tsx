import React from "react";
import AboutHeading from "@/app/components/about/AboutHero";
import OurStory from "@/app/components/about/OurStory";
import MissionVision from "@/app/components/about/MissionVission";
import CoreValues from "@/app/components/about/CoreValues";
import Timeline from "@/app/components/about/Timeline";
import Leadership from "@/app/components/about/Leadership";
import Partners from "@/app/components/about/Partners";
import ProgramsCTA from "@/app/components/programs/ProgramsCTA";

const page = () => {
  return (
    <div>
      <AboutHeading />
      <OurStory />
      <MissionVision />
      <CoreValues />
      <Timeline />
      <Leadership />
      <Partners />
      <progress />
      <ProgramsCTA />
    </div>
  );
};

export default page;
