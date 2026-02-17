import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../../context/themeContext";

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="glass inline-flex h-10 w-10 items-center justify-center rounded-full text-sm text-slate-200 transition hover:scale-105 dark:text-slate-100"
      aria-label="Toggle theme"
    >
      {isDark ? <FaSun /> : <FaMoon className="text-slate-700" />}
    </button>
  );
};

export default ThemeToggle;
