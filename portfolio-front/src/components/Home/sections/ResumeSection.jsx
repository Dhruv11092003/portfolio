import { motion } from "framer-motion";

const skills = [
  {
    group: "Generative AI Stack",
    score: 88,
    items: ["LLMs", "RAG", "LangChain", "Prompt Engineering"],
  },
  {
    group: "Frontend Engineering",
    score: 92,
    items: ["React", "Tailwind", "Framer Motion", "UX Systems"],
  },
  {
    group: "Cloud / MLOps",
    score: 84,
    items: ["AWS", "SageMaker", "Docker", "CI/CD"],
  },
];

const ResumeSection = () => (
  <section id="resume" className="section-wrap">
    <div className="grid gap-4 md:grid-cols-6">
      <motion.article
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bento-card md:col-span-4"
      >
        <p className="text-xs uppercase tracking-[0.2em] text-indigo-500">Education Timeline</p>
        <h2 className="mt-2 font-display text-3xl font-bold">Master of Science in AI/ML</h2>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
          VIT Vellore
          <span className="ml-2 rounded-full bg-indigo-500/20 px-2 py-1 text-xs font-semibold text-indigo-500 dark:text-indigo-300">
            Distinction Track
          </span>
        </p>
        <div className="mt-5 space-y-3 border-l-2 border-indigo-500/40 pl-4 text-sm text-slate-600 dark:text-slate-300">
          <p><span className="font-semibold text-slate-900 dark:text-white">2025–Present:</span> Advanced Deep Learning, model optimization, and deployment pipelines.</p>
          <p><span className="font-semibold text-slate-900 dark:text-white">Current:</span> Building production-grade GenAI systems with monitoring and CI-driven experiments.</p>
        </div>
      </motion.article>

      <motion.article
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bento-card md:col-span-2"
      >
        <h3 className="font-display text-xl font-bold">Signature Projects</h3>
        <ul className="mt-4 space-y-4 text-sm">
          <li>
            <p className="font-semibold">FocusGuard AI</p>
            <p className="font-mono text-xs text-slate-500 dark:text-slate-400">React · Python · Computer Vision</p>
          </li>
          <li>
            <p className="font-semibold">SageMaker Expense Predictor</p>
            <p className="font-mono text-xs text-slate-500 dark:text-slate-400">AWS · SageMaker · XGBoost</p>
          </li>
        </ul>
      </motion.article>

      {skills.map((skill, idx) => (
        <motion.article
          key={skill.group}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.08 }}
          className="bento-card md:col-span-2"
        >
          <div className="flex items-center justify-between">
            <h4 className="font-display text-lg">{skill.group}</h4>
            <span className="font-mono text-xs text-indigo-500">{skill.score}%</span>
          </div>
          <div className="mt-3 h-2 rounded-full bg-slate-200 dark:bg-slate-800">
            <div className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400" style={{ width: `${skill.score}%` }} />
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {skill.items.map((item) => (
              <span key={item} className="rounded-full bg-indigo-500/15 px-3 py-1 text-xs text-indigo-600 dark:text-indigo-300">
                {item}
              </span>
            ))}
          </div>
        </motion.article>
      ))}
    </div>
  </section>
);

export default ResumeSection;
