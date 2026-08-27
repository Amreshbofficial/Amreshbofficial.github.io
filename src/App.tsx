
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './features/portfolio/HeroSection';
import { AboutSection } from './features/portfolio/AboutSection';
import { ServicesGrid } from './features/portfolio/ServicesGrid';
import { TechStack } from './features/portfolio/TechStack';
import { Projects } from './features/portfolio/Projects';
import { ExperienceList } from './features/portfolio/ExperienceList';
import { ProcessTimeline } from './features/portfolio/ProcessTimeline';
import { FaqAccordion, Testimonials } from './features/portfolio/FaqAccordion';
import { ContactSection } from './features/portfolio/ContactSection';

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesGrid />
        <ExperienceList />
        <Projects />
        <TechStack />
        <ProcessTimeline />
        <Testimonials />
        <FaqAccordion />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
