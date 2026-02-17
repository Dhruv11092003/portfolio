import { motion } from "framer-motion";

const skills = {
  "Generative AI Stack": ["LLMs", "RAG", "LangChain", "Prompt Engineering"],
  "Frontend Engineering": ["React", "Tailwind", "Framer Motion", "UX Systems"],
  "Cloud / MLOps": ["AWS", "SageMaker", "Docker", "CI/CD"],
};

const ResumeSection = () => (
  <section id="resume" className="section-wrap">
    <div className="grid gap-4 md:grid-cols-5">
      <motion.article initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass rounded-3xl p-6 md:col-span-3">
        <p className="text-xs uppercase tracking-[0.2em] text-indigo-500">Education Highlight</p>
        <h2 className="mt-2 font-display text-3xl font-bold">Master of Science in AI/ML</h2>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">VIT Vellore <span className="ml-2 rounded-full bg-indigo-500/20 px-2 py-1 text-xs font-semibold text-indigo-400">Current Focus</span></p>
        <div className="mt-6 space-y-3 border-l border-indigo-500/30 pl-4">
          <p className="text-sm">2025–Present · Advanced Deep Learning, MLOps pipelines, distributed model serving.</p>
          <p className="text-sm">Published workflows for end-to-end experimentation and deployment automation.</p>
        </div>
      </motion.article>

      <motion.article initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass rounded-3xl p-6 md:col-span-2">
        <h3 className="font-display text-xl font-bold">Signature Projects</h3>
        <ul className="mt-4 space-y-4">
          <li><p className="font-semibold">FocusGuard AI</p><p className="text-xs text-slate-500 dark:text-slate-400">React · Python · Computer Vision</p></li>
          <li><p className="font-semibold">SageMaker Expense Predictor</p><p className="text-xs text-slate-500 dark:text-slate-400">AWS · SageMaker · XGBoost</p></li>
        </ul>
      </motion.article>

      {Object.entries(skills).map(([group, items]) => (
        <motion.article key={group} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass rounded-3xl p-5 md:col-span-5">
          <h4 className="font-display text-lg">{group}</h4>
          <div className="mt-3 flex flex-wrap gap-2">
            {items.map((item) => (
              <span key={item} className="rounded-full bg-indigo-500/20 px-3 py-1 text-xs text-indigo-600 dark:text-indigo-300">{item}</span>
            ))}
          </div>
        </motion.article>
      ))}
    </div>
  </section>
);

export default ResumeSection;
