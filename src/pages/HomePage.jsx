import FeaturedProjects from "../sections/HomePage/FeaturedProjects";
import Hero from "../sections/HomePage/Hero";

export default function HomePage() {
  return (
    <main className="relative w-full overflow-hidden">
      <Hero />
      <FeaturedProjects />
    </main>
  );
}