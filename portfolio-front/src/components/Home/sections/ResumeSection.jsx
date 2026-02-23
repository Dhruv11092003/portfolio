import { motion } from "framer-motion";

const skills = [
  {
    group: "Artificial Intelligence & ML",
    score: 75,
    items: [
      "Supervised Learning",
      "Unsupervised Learning",
      "Classification Tasks",
      "Regression Based Tasks",
      "Reinforcement Learning (Fundamentals)",
      "ML Systems Design",
      "Object Detection (YOLOv5, OpenCV)",
    ],
  },
  {
    group: "Full-Stack Development",
    score: 80,
    items: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "RESTful APIs",
    ],
  },
  {
    group: "Systems & Automation",
    score: 70,
    items: [
      "MS Power Automate",
      "JavaScript",
      "Python",
      "FastAPI",
      "Linux",
      "Git",
      "Github Actions"
    ],
  },
];

const ResumeSection = () => (
  <section id="resume" className="section-wrap">
    <div className="grid gap-4 md:grid-cols-6">

      {/* EDUCATION */}
      <motion.article
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bento-card md:col-span-4"
      >
        <p className="text-xs uppercase tracking-[0.2em] text-indigo-500">
          Education
        </p>

        <h2 className="mt-2 font-display text-3xl font-bold">
          M.Sc. in Artificial Intelligence & Machine Learning
        </h2>

        <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
          Vellore Institute of Technology (2025 – Present)
          <span className="ml-2 rounded-full bg-indigo-500/20 px-2 py-1 text-xs font-semibold text-indigo-500 dark:text-indigo-300">
            CGPA: 9.69
          </span>
        </p>

        <div className="mt-5 space-y-3 border-l-2 border-indigo-500/40 pl-4 text-sm text-slate-600 dark:text-slate-300">
          <p>
            <span className="font-semibold text-slate-900 dark:text-white">
              Focus Areas:
            </span>{" "}
            Reinforcement Learning, Natural Language Processing,
            Computer Vision, and applied AI system design.
          </p>

          <p>
            <span className="font-semibold text-slate-900 dark:text-white">
              Undergraduate:
            </span>{" "}
            B.Voc in AI & Robotics (2021–2024) — Director’s Medal,
            CGPA 9.568.
          </p>
        </div>
      </motion.article>

      {/* KEY PROJECTS */}
      <motion.article
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bento-card md:col-span-2"
      >
        <h3 className="font-display text-xl font-bold">
          Key Projects
        </h3>

        <ul className="mt-4 space-y-4 text-sm">
          <li>
            <p className="font-semibold">
              Multimodal Mental Health Screening System
            </p>
            <p className="font-mono text-xs text-slate-500 dark:text-slate-400">
              Reinforcement Learning · Multimodal AI · Adaptive Assessment
            </p>
          </li>

          <li>
            <p className="font-semibold">
              Explainable Resume Ranking Engine
            </p>
            <p className="font-mono text-xs text-slate-500 dark:text-slate-400">
              NLP · TF-IDF · Cosine Similarity
            </p>
          </li>

          <li>
            <p className="font-semibold">
              Animal Detection using YOLOv5
            </p>
            <p className="font-mono text-xs text-slate-500 dark:text-slate-400">
              Computer Vision · PyTorch · OpenCV
            </p>
          </li>
        </ul>
      </motion.article>

      {/* SKILLS */}
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
            <span className="font-mono text-xs text-indigo-500">
              {skill.score}%
            </span>
          </div>

          <div className="mt-3 h-2 rounded-full bg-slate-200 dark:bg-slate-800">
            <div
              className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400"
              style={{ width: `${skill.score}%` }}
            />
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            {skill.items.map((item) => (
              <span
                key={item}
                className="rounded-full bg-indigo-500/15 px-3 py-1 text-xs text-indigo-600 dark:text-indigo-300"
              >
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