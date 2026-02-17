import { useContext, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import LinkContext from "../../../context/activeLinkContext";
import ThemeToggle from "../../ui/ThemeToggle";
import useScrollSpy from "../../../hooks/useScrollSpy";

const navItems = [
  { label: "Home", href: "/", id: "home" },
  { label: "Resume", href: "/#resume", id: "resume" },
  { label: "Projects", href: "/#Projects", id: "Projects" },
  { label: "Certs", href: "/#certifications", id: "certifications" },
  { label: "Contact", href: "/#contactMe", id: "contactMe" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { activeLink, setLink } = useContext(LinkContext);
  useScrollSpy(navItems, setLink);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/30 bg-white/70 backdrop-blur-xl dark:bg-[#05070D]/65">
      <nav className="section-wrap flex py-4 items-center justify-between">
        <a href="/" className="font-display text-xl font-bold tracking-widest text-slate-900 dark:text-white">DHRUV.AI</a>
        <button className="md:hidden text-slate-700 dark:text-slate-100" onClick={() => setOpen((v) => !v)}>
          {open ? <FaTimes /> : <FaBars />}
        </button>
        <div className={`${open ? "flex" : "hidden"} absolute right-4 top-16 w-48 flex-col rounded-2xl p-3 glass md:static md:flex md:w-auto md:flex-row md:bg-transparent md:p-0 md:backdrop-blur-none`}>
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`px-3 py-2 text-sm font-medium ${activeLink === item.href ? "text-indigo-500" : "text-slate-700 dark:text-slate-200"}`}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
