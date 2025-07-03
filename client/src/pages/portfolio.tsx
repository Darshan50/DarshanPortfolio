import { useEffect, useState } from "react";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/sections/hero";
import AboutSection from "@/components/sections/about";
import ExperienceSection from "@/components/sections/experience";
import EducationSection from "@/components/sections/education";
import SkillsSection from "@/components/sections/skills";
import ProjectsSection from "@/components/sections/projects";
import CertificatesSection from "@/components/sections/certificates";
import ContactSection from "@/components/sections/contact";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "experience", "education", "skills", "projects", "certificates", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation activeSection={activeSection} />
      
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <EducationSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificatesSection />
        <ContactSection />
      </main>

      <footer className="bg-text-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-white/80 mb-4">
              &copy; 2024 John Smith. All rights reserved.
            </p>
            <p className="text-white/60 text-sm">
              Built with passion using modern web technologies
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
