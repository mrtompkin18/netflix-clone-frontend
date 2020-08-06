import React, { useState, useEffect } from 'react';
import { booleanPaser, getDefaultDarkTheme } from "../utils";
import { KEY_IS_DARK_MODE } from "../constants";

function useDarkMode() {
    const [isDarkMode, setIsDarkMode] = useState(true);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        window.localStorage.setItem(KEY_IS_DARK_MODE, !isDarkMode);
    }

    useEffect(() => {
        const isDarkModeTemp = window.localStorage.getItem(KEY_IS_DARK_MODE);
        if (isDarkModeTemp) {
            setIsDarkMode(booleanPaser(isDarkModeTemp));
        }
    }, []);

    return { isDarkMode, toggleTheme };
}

export default useDarkMode;
