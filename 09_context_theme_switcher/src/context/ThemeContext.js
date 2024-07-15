import { createContext, useContext } from "react";

// Here we are creating a Context
export const ThemeContext = createContext({
    themeMode : "dark",
    darkTheme: () => {},
    lightTheme: () => {}
})


// Here we will export the context provider to wrap our app
export const ThemeContextProvider = ThemeContext.Provider;

// Custom Hook to get access to all the values in our context
export function useTheme(){
    return useContext(ThemeContext);
} 


