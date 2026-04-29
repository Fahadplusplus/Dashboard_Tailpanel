// ThemeProvider.js

import { useState, useEffect } from "react";
import { ThemeContext } from "./theme-context";

export default function ThemeProvider({ children }) {

  // ✅ Read saved theme from localStorage on first load
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "";
  });

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme); // ✅ Save on every change
  }, [theme]);

  const toggleTheme = () =>
    setTheme(prev => (prev === "" ? "dark" : ""));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}