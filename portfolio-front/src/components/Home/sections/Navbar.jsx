import { useContext, useState } from "react";
import { FaBars, FaTimes,FaCode } from "react-icons/fa";
import LinkContext from "../../../context/activeLinkContext";
import ThemeToggle from "../../ui/ThemeToggle";
import useScrollSpy from "../../../hooks/useScrollSpy";

const navItems = [
  { label: "Home", href: "/", id: "home" },
  { label: "Know Me", href: "/#resume", id: "resume" },
  { label: "Projects", href: "/#Projects", id: "Projects" },
  { label: "Certs", href: "/#certifications", id: "certifications" },
  { label: "Contact", href: "/#contactMe", id: "contactMe" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { activeLink, setLink } = useContext(LinkContext);
  useScrollSpy(navItems, setLink);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-[#04050B]/70">
      <nav className="section-wrap flex items-center justify-between py-4">
        <a href="/" className="font-display text-lg font-bold tracking-[0.22em] text-slate-900 dark:text-white"><FaCode size={25} />
</a>

        <button
          className="rounded-lg p-2 text-slate-700 transition hover:bg-slate-900/10 md:hidden dark:text-slate-100 dark:hover:bg-white/10"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>

        <div
          className={`${open ? "flex" : "hidden"} glass absolute right-4 top-16 w-52 flex-col rounded-2xl p-3 md:static md:flex md:w-auto md:flex-row md:items-center md:gap-1 md:border-0 md:bg-transparent md:p-0 md:backdrop-blur-none`}
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`group relative px-3 py-2 text-sm font-semibold transition ${
                activeLink === item.href ? "text-indigo-500" : "text-slate-700 dark:text-slate-200"
              }`}
            >
              {item.label}
              <span className="absolute inset-x-3 bottom-1 h-0.5 origin-left scale-x-0 rounded-full bg-indigo-500 transition group-hover:scale-x-100" />
            </a>
          ))}
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
