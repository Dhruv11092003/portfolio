import { motion } from "framer-motion";

const normalizeTags = (tech) => {
  if (Array.isArray(tech)) {
    return tech.map((item) => String(item).trim()).filter(Boolean);
  }

  if (typeof tech === "string") {
    return tech
      .split(/,|·/)
      .map((item) => item.trim())
      .filter(Boolean);
  }

  if (tech && typeof tech === "object") {
    return Object.values(tech)
      .flat()
      .map((item) => String(item).trim())
      .filter(Boolean);
  }

  return [];
};

const ProjectCard = ({ title, tech, description, links = [] }) => {
  const tags = normalizeTags(tech);

  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ y: -8, scale: 1.01 }}
      className="bento-card h-full"
    >
      <h3 className="font-display text-xl font-bold">{title}</h3>
      {tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={`${title}-${tag}`} className="rounded-full bg-cyan-500/15 px-2.5 py-1 text-[11px] font-mono text-cyan-700 dark:text-cyan-300">
              {tag}
            </span>
          ))}
        </div>
      )}
      <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">{description}</p>
      <div className="mt-5 flex gap-4 text-sm">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="group relative font-semibold text-blue-600 dark:text-blue-300"
          >
            {link.label}
            <span className="absolute left-0 right-0 bottom-0 h-0.5 origin-left scale-x-0 bg-current transition group-hover:scale-x-100" />
          </a>
        ))}
      </div>
    </motion.article>
  );
};

export default ProjectCard;
