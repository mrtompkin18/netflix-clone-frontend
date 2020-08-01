import React, { useState, useEffect } from 'react';
import { booleanPaser, getDefaultDarkTheme } from "../utils";
import { KEY_IS_DARK_MODE } from "../constants";

function useDarkMode() {
    const [isDarkMode, setIsDarkMode] = useState(getDefaultDarkTheme());

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        window.localStorage.setItem(KEY_IS_DARK_MODE, !isDarkMode);
    }

    useEffect(() => {
        const isDarkModeTemp = window.localStorage.getItem(KEY_IS_DARK_MODE);
        if (isDarkModeTemp) {
            setIsDarkMode(booleanPaser(isDarkModeTemp));
        }
    }, [])

    console.log(isDarkMode)

    return { isDarkMode, toggleTheme };
}

export default useDarkMode;
