import { motion } from "framer-motion";
import "./index.css";

const stack = [
  { id: 1, name: "HTML", imgUrl: "./stack/html.jpg", imgAlt: "HTML" },
  { id: 2, name: "CSS", imgUrl: "./stack/CSS.png", imgAlt: "CSS" },
  { id: 3, name: "Javascript", imgUrl: "./stack/JS.png", imgAlt: "JS" },
  { id: 4, name: "MongoDB", imgUrl: "./stack/Mongo.png", imgAlt: "MongoDB" },
  { id: 5, name: "Express", imgUrl: "./stack/ExpressJS.png", imgAlt: "Express" },
  { id: 6, name: "React JS", imgUrl: "./stack/React.png", imgAlt: "React" },
  { id: 7, name: "Node JS", imgUrl: "./stack/Node.png", imgAlt: "Node" },
  { id: 8, name: "Vue JS", imgUrl: "./stack/Vue.jpg", imgAlt: "Vue" },
  { id: 9, name: "Python", imgUrl: "./stack/Python.jpg", imgAlt: "Python" },
  { id: 10, name: "Power Automate", imgUrl: "./stack/PowerAutomate.jpg", imgAlt: "Power Automate" },
  { id: 11, name: "SQL", imgUrl: "./stack/SQL.png", imgAlt: "SQL" },
];

const TechStack = () => (
  <section className="section-block" id="tech-stack">
    <motion.h2 className="section-head" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
      Tech Stack
    </motion.h2>
    <ul className="stack-grid">
      {stack.map((item, index) => (
        <motion.li
          key={item.id}
          className="stack-card glass-panel"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: index * 0.05 }}
        >
          <img src={item.imgUrl} alt={item.imgAlt} loading="lazy" />
          <p>{item.name}</p>
        </motion.li>
      ))}
    </ul>
  </section>
);

export default TechStack;
