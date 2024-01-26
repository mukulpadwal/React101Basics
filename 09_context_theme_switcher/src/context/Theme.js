import React, { useContext } from "react";

export const ThemeContext = React.createContext({
  themeMode: "light",
  setDarkMode: () => {},
  setLightMode: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme() {
    return useContext(ThemeContext);
}