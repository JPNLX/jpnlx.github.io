import { useEffect, useMemo, useState } from "react";
import "./ThemeSwitcher.css";
import PropTypes from "prop-types";

const ThemeSwitcher = ({ darkClassName }) => {
  // Should remember the dark mode class name, defaulting to "dark"

  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      try {
        const prefersDark =
          typeof window.matchMedia === "function" &&
          window.matchMedia("(prefers-color-scheme: dark)").matches;
        return prefersDark;
      } catch (_) {
        // no-op
      }
    }
    return false;
  });

  // Apply the selected theme (dark or light) when the component mounts and when isDarkMode changes
  useEffect(() => {
    if (typeof document !== "undefined") {
      if (isDarkMode) {
        document.body.classList.add(darkClassName);
      } else {
        document.body.classList.remove(darkClassName);
      }
    }
    if (typeof localStorage !== "undefined") {
      try {
        localStorage.setItem("darkMode", String(isDarkMode));
      } catch (_) {
        // ignore
      }
    }
  }, [isDarkMode, darkClassName]);

  // Toggle between dark and light mode
  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div>
      <button data-testid="themeSwitcherButton" className="btn" onClick={toggleTheme}>
        {isDarkMode ? "☽" : "🌣"}
      </button>
    </div>
  );
};

ThemeSwitcher.propTypes = {
  darkClassName: PropTypes.string,
};

ThemeSwitcher.defaultProps = {
  darkClassName: "dark",
};

export default ThemeSwitcher;
