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
    <main className="relative overflow-hidden bg-slate-50 dark:bg-[#04050B]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_5%,rgba(59,130,246,.22),transparent_30%),radial-gradient(circle_at_85%_0%,rgba(124,58,237,.28),transparent_33%),radial-gradient(circle_at_50%_60%,rgba(14,165,233,.14),transparent_40%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-indigo-500/15 to-transparent dark:from-indigo-400/10" />
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
