import { MOVIES_URI } from "../constants/request";
import api from "../services/api";

export const booleanPaser = (strBoolean) => {
    return strBoolean && strBoolean === "true";
}

export const getDefaultDarkTheme = () => {
    const isDarkTheme = process.env.REACT_APP_DEFAULT_THEME_DARK_MODE;
    return booleanPaser(isDarkTheme) || false;
}
