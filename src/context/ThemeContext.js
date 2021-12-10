import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export function useTheme() {
   return useContext(ThemeContext);
}

export default function ThemeProvider({ children }) {
   const [darkThemeActive, setDarkThemeActive] = useState(true);

   const setLightTheme = () => setDarkThemeActive(false);
   const setDarkTheme = () => setDarkThemeActive(true);

   useEffect(() => {
      const root = window.document.documentElement;
      if (darkThemeActive) root.classList.add("dark");
      else root.classList.remove("dark");
   }, [darkThemeActive]);

   const value = { darkThemeActive, setLightTheme, setDarkTheme };

   return (
      <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
   );
}
