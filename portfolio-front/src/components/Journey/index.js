import { motion } from "framer-motion";

const entries = [
  {
    title: "B.Voc in AI & Robotics",
    text: "Completed undergraduate studies with a focus on artificial intelligence, machine learning fundamentals, and applied systems. Awarded the Director’s Medal for highest academic performance (CGPA 9.568).",
    year: "2021 – 2024",
  },
  {
    title: "Software Developer Intern – Cybernetic Systems LLP",
    text: "Worked on automation using PowerShell and Bash, built REST APIs with FastAPI, contributed to Vue.js and Laravel applications, and integrated enterprise APIs including GreytHR and Adobe Sign.",
    year: "May 2024 – Aug 2024",
  },
  {
    title: "M.Sc. in Artificial Intelligence & Machine Learning",
    text: "Currently pursuing postgraduate studies with emphasis on Machine Learning, Deep Learning, Generative AI, Reinforcement learning, NLP, computer vision, and applied AI system design (CGPA 9.69).",
    year: "2025 – Present",
  },
];

const AboutMeTimeline = () => (
  <section className="section-wrap" id="journey">
    <h2 className="font-display text-3xl font-bold">
      Academic & Professional Journey
    </h2>

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
          <p className="font-mono text-xs text-indigo-500 dark:text-indigo-300">
            {entry.year}
          </p>

          <h3 className="mt-2 font-display text-xl font-bold">
            {entry.title}
          </h3>

          <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
            {entry.text}
          </p>
        </motion.article>
      ))}
    </div>
  </section>
);

export default AboutMeTimeline;