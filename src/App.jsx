import { Navbar } from "./components/Navbar";
import { ContactSection } from "./sections/Contact.Section";
import { ExperienceSection } from "./sections/Experience.Section";
import { Footer } from "./sections/Footer";
import { Hero } from "./sections/Hero.Section";
import { ProjectSection } from "./sections/Project.section";

export const App = () => {
  return (
    <main className="relative min-h-screen selection:bg-white selection:text-black">
      <div className="noise-bg" />
      <Navbar />
      <Hero />
      <ProjectSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </main>
  );
};
