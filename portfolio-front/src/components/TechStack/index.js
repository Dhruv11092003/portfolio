import { motion } from "framer-motion";

const stackCategories = [
  {
    title: "Programming Languages",
    items: [
      { name: "Python", imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "JavaScript", imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "SQL", imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    ],
  },
  {
    title: "AI / ML Libraries",
    items: [
      { name: "NumPy", imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
      { name: "pandas", imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
      { name: "scikit-learn", imgUrl: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" },
      { name: "TensorFlow", imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
      { name: "Keras", imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg" },
      // { name: "PyTorch", imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
      { name: "OpenCV", imgUrl: "https://upload.wikimedia.org/wikipedia/commons/3/32/OpenCV_Logo_with_text_svg_version.svg" },
    ],
  },
  {
    title: "Web Development",
    items: [
      { name: "React.js", imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Node.js", imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express.js", imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "MongoDB", imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "FastAPI", imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
    ],
  },
  {
    title: "Automation & Systems",
    items: [
      { name: "Power Automate", imgUrl: "stack/PowerAutomate.jpg" },
      { name: "Linux", imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
    ],
  },
  {
    title: "Tools & Ecosystem",
    items: [
      { name: "Git", imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "npm", imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" },
    ],
  },
];

const TechStack = () => (
  <section className="section-wrap" id="tech-stack">
    <h2 className="font-display text-3xl font-bold">
      Technical Skills
    </h2>

    <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
      Technologies used across AI/ML projects, full-stack development, and
      enterprise automation experience.
    </p>

    <div className="mt-8 space-y-10">
      {stackCategories.map((category) => (
        <div key={category.title}>
          <h3 className="mb-5 font-display text-xl font-semibold">
            {category.title}
          </h3>

          <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {category.items.map((item, index) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bento-card flex flex-col items-center justify-center p-4 text-center"
              >
                <img
                  src={item.imgUrl}
                  alt={item.name}
                  className="h-12 w-12 object-contain"
                  loading="lazy"
                />
                <p className="mt-3 text-sm font-medium">
                  {item.name}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default TechStack;