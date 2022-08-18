import { teamsDarkTheme, teamsHighContrastTheme, teamsLightTheme, Theme, webDarkTheme, webLightTheme } from "@fluentui/react-components";

const themes: Record<"WebLight" | "WebDark" | "TeamsLight" | "TeamsDark" | "TeamsHighContrast", Theme> = {
    "TeamsLight": teamsLightTheme,
    "TeamsDark": teamsDarkTheme,
    "TeamsHighContrast": teamsHighContrastTheme,
    "WebLight": webLightTheme,
    "WebDark": webDarkTheme,
};

export function getTheme(name:"WebLight" | "WebDark" | "TeamsLight" | "TeamsDark" | "TeamsHighContrast"):Theme {
    return themes[name];
}