import { Suspense, lazy } from "react";
import Navbar from "./sections/Navbar";
import HeroSection from "./sections/HeroSection";
import ResumeSection from "./sections/ResumeSection";
import Footer from "./sections/Footer";

const TechStack = lazy(() => import("../TechStack"));
const Journey = lazy(() => import("../Journey"));
const Projects = lazy(() => import("../Projects"));
const Certificates = lazy(() => import("../Certificates"));
const ContactMe = lazy(() => import("../ContactMe"));

const Home = () => {
  return (
    <main className="relative overflow-hidden bg-slate-100 dark:bg-[#05070D]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,.20),transparent_28%),radial-gradient(circle_at_80%_0%,rgba(124,58,237,.24),transparent_35%)]" />
      <Navbar />
      <HeroSection />
      <ResumeSection />
      <Suspense fallback={<p className="section-wrap text-center text-sm text-slate-500">Loading modules...</p>}>
        <TechStack />
        <Journey />
        <Projects />
        <Certificates />
        <ContactMe />
      </Suspense>
      <Footer />
    </main>
  );
};

export default Home;
