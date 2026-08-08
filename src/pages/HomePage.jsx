import Navbar  from "../layout/Navbar";

import Hero from "../sections/HomePage/Hero";
import WhatWeCreate from "../sections/HomePage/WhatWeCreate";
import SelectedWork from "../sections/HomePage/SelectedWork";
import TheDifference from "../sections/HomePage/TheDifference";
import Results from "../sections/HomePage/Results";
import HowWeWork from "../sections/HomePage/HowWeWork";
import Testimonials from "../sections/HomePage/Testimonials";
import Industries from "../sections/HomePage/Industries";
import FinalCTA from "../sections/HomePage/FinalCTA";

export default function HomePage() {
  return (
    <main className="relative w-full overflow-hidden">
      {/* Cinematic Hero */}
      <Hero />

      {/* Navigation starts AFTER hero */}
      <Navbar />

      {/* Homepage content */}
      <WhatWeCreate />
      <SelectedWork />
      <TheDifference />
      <Results />
      <HowWeWork />
      <Testimonials />
      <Industries />
      <FinalCTA />
    </main>
  );
}
