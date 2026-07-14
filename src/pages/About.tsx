import { lazy } from "react";

const AboutGlance = lazy(() => import("../sections/about/AboutGlance").then(mod => ({ default: mod.AboutGlance })));
const AboutHero = lazy(() => import("../sections/about/aboutHero").then(mod => ({ default: mod.AboutHero })));
const AboutOverview = lazy(() => import("../sections/about/AboutOverview").then(mod => ({ default: mod.AboutOverview })));
const AboutSignature = lazy(() => import("../sections/about/AboutSignature").then(mod => ({ default: mod.AboutSignature })));

// import { AboutGlance } from "../sections/about/AboutGlance";
// import { AboutHero } from "../sections/about/aboutHero";
// import { AboutOverview } from "../sections/about/AboutOverview";
// import { AboutSignature } from "../sections/about/AboutSignature";


export const About = () => {
  return (
    <>
      <section className="pt-30 overflow-hidden">
        <AboutHero />
        <AboutOverview />
        <AboutGlance />
        <AboutSignature />
      </section>
    </>
  );
};