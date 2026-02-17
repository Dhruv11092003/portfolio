import { Suspense, lazy } from "react";
import Header from "../Header";
import HeroSection from "./sections/HeroSection";
import "./index.css";

const TechStack = lazy(() => import("../TechStack"));
const Journey = lazy(() => import("../Journey"));
const Projects = lazy(() => import("../Projects"));
const Certificates = lazy(() => import("../Certificates"));
const ContactMe = lazy(() => import("../ContactMe"));

const Home = ({ changeTheme }) => {
  return (
    <div className="portfolio-root">
      <Header changeTheme={changeTheme} />
      <HeroSection />
      <Suspense fallback={<p className="section-loader">Loading sections...</p>}>
        <TechStack />
        <Journey />
        <Projects />
        <Certificates />
        <ContactMe theme={changeTheme.theme} />
      </Suspense>
    </div>
  );
};

export default Home;
