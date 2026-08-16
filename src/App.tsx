import Navbar from "./components/Navbar";
import Atmosphere from "./components/Atmosphere";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Achievements from "./sections/Achievements";
import HallOfFame from "./sections/HallOfFame";
import Arsenal from "./sections/Arsenal";
import SecurityFocus from "./sections/SecurityFocus";
import Methodology from "./sections/Methodology";
import Platforms from "./sections/Platforms";
import ResponsibleDisclosure from "./sections/ResponsibleDisclosure";
import YouTubeSection from "./sections/YouTubeSection";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-ink-950">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-signal focus:px-4 focus:py-2 focus:font-mono focus:text-sm focus:text-ink-950"
      >
        Skip to main content
      </a>

      <ScrollProgress />
      <Atmosphere />
      <Navbar />

      <main id="main-content">
        <Hero />
        <About />
        <Achievements />
        <HallOfFame />
        <Arsenal />
        <SecurityFocus />
        <Methodology />
        <Platforms />
        <ResponsibleDisclosure />
        <YouTubeSection />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
