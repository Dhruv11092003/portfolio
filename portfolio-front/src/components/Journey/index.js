import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap, FaUser } from "react-icons/fa";
import "./index.css";

const entries = [
  {
    icon: <FaUser />,
    title: "About Me",
    image: "aboutme.png",
    points: [
      "Master's student focused on AI and Machine Learning.",
      "Strong MERN foundation with a deepening focus on Deep Learning and GenAI.",
      "Enjoy building scalable products that blend practical engineering with research ideas.",
    ],
  },
  {
    icon: <FaBriefcase />,
    title: "Experience",
    image: "experience.png",
    points: [
      "Software Developer Intern at Cybernetics System LLP.",
      "Worked on website maintenance, updates, and automation workflows.",
      "Improved database automation and operational efficiency.",
    ],
  },
  {
    icon: <FaGraduationCap />,
    title: "Education",
    image: "education.png",
    points: [
      "Bachelor of Vocation (AI & Robotics) — 9.568 CGPA.",
      "Intermediate (PCM) — 91.6%.",
    ],
  },
];

const AboutMeTimeline = () => (
  <section className="section-block" id="journey">
    <h2 className="section-head">Journey</h2>
    <div className="journey-grid">
      {entries.map((entry, index) => (
        <motion.article
          key={entry.title}
          className="journey-card glass-panel"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: index * 0.1 }}
        >
          <div className="journey-title"><span>{entry.icon}</span><h3>{entry.title}</h3></div>
          <img src={entry.image} alt={entry.title} loading="lazy" />
          <ul>{entry.points.map((point) => <li key={point}>{point}</li>)}</ul>
        </motion.article>
      ))}
    </div>
  </section>
);

export default AboutMeTimeline;
