import { lazy } from "react";

const Hero = lazy(() => import("../sections/home/Hero").then(mod => ({ default: mod.Hero })));
const Featured = lazy(() => import("../sections/home/Featured").then(mod => ({ default: mod.Featured })));

export const Home = () => {
  return (
    <>
      <section className="pt-30 overflow-hidden">
        <Hero />
        <Featured />
      </section>
    </>
  );
};