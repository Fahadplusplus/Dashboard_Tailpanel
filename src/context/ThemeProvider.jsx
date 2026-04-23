import { useState, useEffect } from "react";
import { ThemeContext } from "./theme-context";

export default function ThemeProvider({ children }) {

  const [theme, setTheme] = useState("");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme(theme === "" ? "dark" : "");

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
