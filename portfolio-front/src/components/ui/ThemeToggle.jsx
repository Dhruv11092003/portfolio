import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../../context/themeContext";

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="glass inline-flex h-10 w-10 items-center justify-center rounded-full text-sm text-slate-700 transition hover:scale-105 dark:text-yellow-300"
      aria-label="Toggle theme"
    >
      {isDark ? <FaSun /> : <FaMoon />}
    </button>
  );
};

export default ThemeToggle;
