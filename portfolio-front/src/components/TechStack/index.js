import "./index.css";
import { motion } from "framer-motion";

const TechStack = () => {
  const stack = [
    { id: 1, Name: "HTML", imgUrl: "./stack/html.jpg", imgAlt: "HTML" },
    { id: 2, Name: "CSS", imgUrl: "./stack/CSS.png", imgAlt: "CSS" },
    { id: 3, Name: "Javascript", imgUrl: "./stack/JS.png", imgAlt: "JS" },
    { id: 4, Name: "MongoDB", imgUrl: "./stack/Mongo.png", imgAlt: "MongoDB" },
    {
      id: 5,
      Name: "Express",
      imgUrl: "./stack/ExpressJS.png",
      imgAlt: "Express",
    },
    { id: 6, Name: "React JS", imgUrl: "./stack/React.png", imgAlt: "React" },
    { id: 7, Name: "Node JS", imgUrl: "./stack/Node.png", imgAlt: "Node" },
    { id: 8, Name: "Vue JS", imgUrl: "./stack/Vue.jpg", imgAlt: "Vue" },
    { id: 9, Name: "Python", imgUrl: "./stack/Python.jpg", imgAlt: "Python" },
    {
      id: 10,
      Name: "Power Automate",
      imgUrl: "./stack/PowerAutomate.jpg",
      imgAlt: "Power Automate",
    },
    { id: 11, Name: "SQL", imgUrl: "./stack/SQL.png", imgAlt: "SQL" },
  ];

  return (
    <div className="stack-container">
      <motion.div
        initial={{ opacity: 0, y: 50 }} // Start slightly lower with 0 opacity
        whileInView={{ opacity: 1, y: 0 }} // Slide up when in view
        viewport={{ once: false, amount: 0.2 }} // Animates when 20% of it is visible
        transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
      >
        <h1 className="section-title">My Tech Stack</h1>
        <ul className="stack-list-container">
          {stack.map((each, index) => (
            <motion.li
              key={each.id}
              className="stack-list-item"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }} // Staggered effect
            >
              <img src={each.imgUrl} alt={each.imgAlt} className="stack-img" />
              <p className="stack-para">{each.Name}</p>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default TechStack;
