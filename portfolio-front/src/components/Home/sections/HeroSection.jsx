import { motion, useScroll, useTransform } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import useTypewriter from "../../../hooks/useTypewriter";

const HeroSection = () => {
  const intro = useTypewriter([
    "I build AI Systems & Scalable Frontends.",
    "Deep Learning + MLOps + GenAI in production.",
  ]);
  const { scrollYProgress } = useScroll();
  const floatY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section id="home" className="section-wrap grid min-h-[82vh] items-center gap-5 lg:grid-cols-12">
      <div className="space-y-6 lg:col-span-7">
        <p className="inline-flex rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-indigo-500">
          AI Engineer • Full Stack Developer
        </p>
        <h1 className="font-display text-4xl font-bold leading-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
          Hi, I&apos;m Dhruv.
          <span className="block bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
            I design intelligent products that ship.
          </span>
        </h1>
        <p className="font-mono text-sm text-slate-700 dark:text-slate-300 sm:text-base">
          {intro}
          <span className="animate-pulse">|</span>
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => window.open("https://drive.google.com/file/d/11J9GxTp_TJ1XrRhmzYABJe4ywEO7jmYC/view?usp=sharing")}
            className="rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-5 py-3 text-sm font-semibold text-white transition hover:scale-105"
          >
            Download Resume <IoMdDownload className="ml-1 inline" />
          </button>
          <a
            href="#Projects"
            className="group relative rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:scale-105 dark:border-slate-700 dark:text-slate-100"
          >
            View Projects
            <span className="absolute left-5 right-5 bottom-2 h-0.5 origin-left scale-x-0 bg-current transition group-hover:scale-x-100" />
          </a>
        </div>

        <div className="flex gap-3 text-xl">
          <a href="https://github.com/Dhruv11092003" target="_blank" rel="noreferrer" className="bento-card rounded-full p-3">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/dhruv-kulshrestha11" target="_blank" rel="noreferrer" className="bento-card rounded-full p-3">
            <FaLinkedin />
          </a>
        </div>
      </div>

      <motion.div style={{ y: floatY }} className="neon-ring grid gap-4 lg:col-span-5">
        <div className="bento-card">
          <img src="e-pfp.png" alt="Dhruv Kulshrestha" className="mx-auto h-52 w-52 rounded-2xl object-cover" loading="lazy" />
          <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
            Building resilient systems at the intersection of software engineering, data, and machine intelligence.
          </p>
        </div>
        <div className="bento-card font-mono text-xs text-cyan-700 dark:text-cyan-300">
          <p>&gt; status: shipping AI + frontend experiences</p>
          <p>&gt; focus: LLM products, MLOps automation, UX performance</p>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
