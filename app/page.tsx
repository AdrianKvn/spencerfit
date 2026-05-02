import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProgramsSection from "@/components/ProgramsSection";
import MentoriaSection from "@/components/MentoriaSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProgramsSection />
        <MentoriaSection />
        <AboutSection />
      </main>
      <Footer />
    </>
  );
}
