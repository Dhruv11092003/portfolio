import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import useTypewriter from "../../../hooks/useTypewriter";

const HeroSection = () => {
  const intro = useTypewriter(["I build AI Systems & Scalable Frontends.", "Deep Learning + MLOps + GenAI."]);

  return (
    <section id="home" className="section-wrap grid min-h-[78vh] items-center gap-8 md:grid-cols-[1.3fr_1fr]">
      <div className="space-y-6">
        <p className="inline-flex rounded-full border border-indigo-400/40 bg-indigo-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-indigo-500">AI Engineer • Full Stack Developer</p>
        <h1 className="font-display text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-6xl">Hi, I'm Dhruv.</h1>
        <p className="font-mono text-base text-slate-700 dark:text-slate-300">{intro}<span className="animate-pulse">|</span></p>
        <div className="flex flex-wrap items-center gap-3">
          <button onClick={() => window.open("https://drive.google.com/file/d/11J9GxTp_TJ1XrRhmzYABJe4ywEO7jmYC/view?usp=sharing")} className="rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-5 py-3 text-sm font-semibold text-white transition hover:scale-105">Download Resume <IoMdDownload className="inline" /></button>
          <a href="#Projects" className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:scale-105 dark:border-slate-700 dark:text-slate-100">View Projects</a>
        </div>
        <div className="flex gap-3 text-xl">
          <a href="https://github.com/Dhruv11092003" target="_blank" rel="noreferrer" className="glass rounded-full p-3 transition hover:scale-105"><FaGithub /></a>
          <a href="https://linkedin.com/in/dhruv-kulshrestha11" target="_blank" rel="noreferrer" className="glass rounded-full p-3 transition hover:scale-105"><FaLinkedin /></a>
        </div>
      </div>
      <motion.div whileHover={{ y: -6 }} className="glass rounded-3xl p-5 shadow-glow">
        <img src="e-pfp.png" alt="Dhruv Kulshrestha" className="mx-auto h-56 w-56 rounded-2xl object-cover" loading="lazy" />
        <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">Building resilient products at the intersection of software engineering and machine intelligence.</p>
      </motion.div>
    </section>
  );
};

export default HeroSection;
