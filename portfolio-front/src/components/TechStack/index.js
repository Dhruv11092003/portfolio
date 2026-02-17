import { motion } from "framer-motion";

const stack = [
  { id: 1, name: "HTML", imgUrl: "./stack/html.jpg" },
  { id: 2, name: "CSS", imgUrl: "./stack/CSS.png" },
  { id: 3, name: "Javascript", imgUrl: "./stack/JS.png" },
  { id: 4, name: "MongoDB", imgUrl: "./stack/Mongo.png" },
  { id: 5, name: "Express", imgUrl: "./stack/ExpressJS.png" },
  { id: 6, name: "React JS", imgUrl: "./stack/React.png" },
  { id: 7, name: "Node JS", imgUrl: "./stack/Node.png" },
  { id: 8, name: "Python", imgUrl: "./stack/Python.jpg" },
];

const TechStack = () => (
  <section className="section-wrap" id="tech-stack">
    <h2 className="font-display text-3xl font-bold">Tech Arsenal</h2>
    <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Tools I use to ship high-performance web and AI products.</p>
    <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
      {stack.map((item, i) => (
        <motion.li
          key={item.id}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.06 }}
          className="bento-card text-center"
        >
          <img src={item.imgUrl} alt={item.name} className="mx-auto h-12 w-12 rounded-lg object-cover" loading="lazy" />
          <p className="mt-3 text-sm font-semibold">{item.name}</p>
        </motion.li>
      ))}
    </ul>
  </section>
);

export default TechStack;
