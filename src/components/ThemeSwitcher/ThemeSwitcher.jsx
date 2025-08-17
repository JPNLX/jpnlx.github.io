import { useEffect, useMemo, useState } from "react";
import "./ThemeSwitcher.css";
import PropTypes from "prop-types";

const ThemeSwitcher = ({ darkClassName, win }) => {
  // Should remember the dark mode class name, defaulting to "dark"

  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof win !== "undefined") {
      //const stored = localStorage.getItem("darkMode");
      const prefersDark = win.matchMedia && win.matchMedia("(prefers-color-scheme: dark)").matches;
      return prefersDark;
      //return stored === "true";
    }
    return false;
  });

  // Apply the selected theme (dark or light) when the component mounts and when isDarkMode changes
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add(darkClassName);
    } else {
      document.body.classList.remove(darkClassName);
    }
    // Save to localStorage
    localStorage.setItem("darkMode", isDarkMode);
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
  win: window,
};

export default ThemeSwitcher;
