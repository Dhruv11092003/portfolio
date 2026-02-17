import { motion } from "framer-motion";

const entries = [
  { title: "AI & ML Journey", text: "Transitioned from MERN development into Deep Learning and Generative AI systems.", year: "2023" },
  { title: "Cybernetics System LLP", text: "Software Developer Intern focused on automation and maintainable product delivery.", year: "2024" },
  { title: "Graduate Studies", text: "Advanced AI/ML specialization with MLOps and deployment-first engineering practices.", year: "2025" },
];

const AboutMeTimeline = () => (
  <section className="section-wrap" id="journey">
    <h2 className="font-display text-3xl font-bold">Experience Timeline</h2>
    <div className="mt-6 space-y-4">
      {entries.map((entry, i) => (
        <motion.article key={entry.title} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass rounded-2xl p-5">
          <p className="text-xs font-mono text-indigo-500 dark:text-indigo-300">{entry.year}</p>
          <h3 className="font-display text-xl font-bold">{entry.title}</h3>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{entry.text}</p>
        </motion.article>
      ))}
    </div>
  </section>
);

export default AboutMeTimeline;
