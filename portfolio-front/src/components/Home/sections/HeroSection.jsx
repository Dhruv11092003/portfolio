import { IoMdDownload } from "react-icons/io";
import { FaGithub, FaLinkedin, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import useTypewriter from "../../../hooks/useTypewriter";

const socialLinks = [
  { href: "https://linkedin.com/in/dhruv-kulshrestha11", label: "LinkedIn", icon: <FaLinkedin /> },
  { href: "https://github.com/Dhruv11092003", label: "GitHub", icon: <FaGithub /> },
  { href: "https://wa.me/+919760349169", label: "WhatsApp", icon: <FaWhatsapp /> },
  { href: "https://t.me/dhruv11092003", label: "Telegram", icon: <FaTelegram /> },
];

const HeroSection = () => {
  const role = useTypewriter([
    "AI & ML Engineer",
    "Deep Learning Practitioner",
    "MLOps and Generative AI Builder",
  ]);

  return (
    <section className="hero" id="home">
      <div className="grid-overlay" />
      <motion.div className="hero-content" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
        <img src="e-pfp.png" alt="Dhruv Kulshrestha" className="hero-image" loading="lazy" />
        <p className="kicker">Hello, I'm</p>
        <h1>Dhruv Kulshrestha</h1>
        <p className="typing">{role}<span className="caret">|</span></p>
        <div className="hero-actions">
          <button
            className="primary-btn"
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/11J9GxTp_TJ1XrRhmzYABJe4ywEO7jmYC/view?usp=sharing"
              )
            }
          >
            Download Resume <IoMdDownload />
          </button>
          <a href="#tech-stack" className="ghost-btn">Explore Work</a>
        </div>
        <div className="social-row">
          {socialLinks.map((link) => (
            <a key={link.href} href={link.href} aria-label={link.label} target="_blank" rel="noreferrer">
              {link.icon}
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
