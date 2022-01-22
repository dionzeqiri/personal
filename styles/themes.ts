import { createGlobalStyle } from "styled-components";

type ThemeType = {
  color: {
    black: string;
    white: string;

    primary: string;
    secondary: string;

    hoverPrimary: string;
    hoverSecondary: string;

    textPrimary: string;
    textSecondary: string;
  };

  font: {
    h1: string;
    h2: string;
    h3: string;
    p: string;
  };
};

type ThemesType = {
  DARK: ThemeType;
  LIGHT: ThemeType;
};

export const Font = {
  h1: "2rem",
  h2: "1.2rem",
  h3: "0.8rem",
  p: "0.75rem",
};

export const Themes: ThemesType = {
  DARK: {
    color: {
      black: "#0F110C",
      white: "#f5f5f5",

      primary: "#1B263B",
      secondary: "#415A77",

      hoverPrimary: "#CED2D4",
      hoverSecondary: "#6A819D",

      textPrimary: "#E0E1DD",
      textSecondary: "#0D1B2A",
    },
    font: Font,
  },

  LIGHT: {
    color: {
      black: "#0F110C",
      white: "#f5f5f5",

      primary: "#E0E1DD",
      secondary: "#778DA9",

      hoverPrimary: "#ACB7C3",
      hoverSecondary: "#D3D7D7",

      textPrimary: "#0D1B2A",
      textSecondary: "#E0E1DD",
    },
    font: Font,
  },
};

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    
    scrollbar-width: auto;
    scrollbar-color: rgba(255, 255, 255, 0.25) rgba(255, 255, 255, 0.3);
    ::-webkit-scrollbar {
      width: 12px;
    }
    ::-webkit-scrollbar-track {
      background: rgba(255, 255, 255, 0.3);
    }
    ::-webkit-scrollbar-thumb {
      background-color: rgba(255, 255, 255, 0.25);
    }
  }`;
