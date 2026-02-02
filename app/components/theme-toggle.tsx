import { RiSunLine, RiMoonLine } from "react-icons/ri";
import { useTheme } from "~/lib/theme";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="p-2 rounded-lg text-theme-muted hover:text-theme-accent hover:bg-theme-subtle transition-colors"
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      {theme === "dark" ? <RiSunLine size={20} /> : <RiMoonLine size={20} />}
    </button>
  );
}
