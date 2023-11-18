import React, { createContext, useContext, useState } from 'react'
import { defaultTheme, customeTheme } from '../utils/themeOptions';

export const ThemeContext = createContext();

export const ThemeContextProvider = (props) => {

    let themeDefault = JSON.parse(localStorage.getItem("theme")) || defaultTheme
    const [theme, setTheme] = useState(defaultTheme)

    return <ThemeContext.Provider value={{ theme, setTheme }}>
        {props.children}
    </ThemeContext.Provider>
}


export const useThemeContext = () => {
    return useContext(ThemeContext)
}