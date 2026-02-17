import { useContext, useState } from "react";
import { FaBars, FaMoon, FaTimes } from "react-icons/fa";
import LinkContext from "../../context/activeLinkContext";
import useScrollSpy from "../../hooks/useScrollSpy";
import "./index.css";

const navItems = [
  { label: "Home", href: "/", id: "home" },
  { label: "Journey", href: "/#journey", id: "journey" },
  { label: "Projects", href: "/#Projects", id: "Projects" },
  { label: "Certifications", href: "/#certifications", id: "certifications" },
  { label: "Contact", href: "/#contactMe", id: "contactMe" },
];

const Header = ({ changeTheme }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { activeLink, setLink } = useContext(LinkContext);

  useScrollSpy(navItems, setLink);

  return (
    <header className="header-shell">
      <nav className="header-nav">
        <a href="/" className="brand-mark">
          DK
        </a>

        <button className="menu-btn" onClick={() => setMenuOpen((prev) => !prev)}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={activeLink === item.href ? "nav-link active" : "nav-link"}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <button className="theme-btn" onClick={changeTheme.main} title="Toggle theme">
            <FaMoon />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
