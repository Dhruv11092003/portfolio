import { motion } from "framer-motion";

const ProjectCard = ({ title, tech, description, links = [] }) => (
  <motion.article whileHover={{ y: -5, scale: 1.01 }} className="glass h-full rounded-2xl p-5">
    <h3 className="font-display text-xl font-bold">{title}</h3>
    <p className="mt-2 text-xs font-mono text-indigo-500 dark:text-indigo-300">{tech}</p>
    <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{description}</p>
    <div className="mt-4 flex gap-3 text-sm">
      {links.map((link) => (
        <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="font-semibold text-blue-600 underline-offset-4 hover:underline dark:text-blue-300">
          {link.label}
        </a>
      ))}
    </div>
  </motion.article>
);

export default ProjectCard;
