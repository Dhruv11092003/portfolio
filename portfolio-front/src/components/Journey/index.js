import { motion } from "framer-motion";

const entries = [
  {
    title: "AI & ML Journey",
    text: "Moved from full-stack systems into deep learning and GenAI product engineering.",
    year: "2023",
  },
  {
    title: "Cybernetics System LLP",
    text: "Software Developer Intern focused on automation, maintainability and delivery speed.",
    year: "2024",
  },
  {
    title: "Graduate Studies",
    text: "Pursuing advanced AI/ML specialization with MLOps and production architecture focus.",
    year: "2025",
  },
];

const AboutMeTimeline = () => (
  <section className="section-wrap" id="journey">
    <h2 className="font-display text-3xl font-bold">Experience Timeline</h2>
    <div className="mt-6 grid gap-4 md:grid-cols-3">
      {entries.map((entry, i) => (
        <motion.article
          key={entry.title}
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="bento-card"
        >
          <p className="font-mono text-xs text-indigo-500 dark:text-indigo-300">{entry.year}</p>
          <h3 className="mt-2 font-display text-xl font-bold">{entry.title}</h3>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{entry.text}</p>
        </motion.article>
      ))}
    </div>
  </section>
);

export default AboutMeTimeline;
