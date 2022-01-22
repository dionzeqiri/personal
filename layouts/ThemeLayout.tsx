import type { NextPage } from "next";

import styled, { ThemeProvider } from "styled-components";
import { Themes, GlobalStyles } from "#styles/themes";

import { useAppSelector, useAppDispatch } from "#app/hook";
// import { changeTheme } from "#app/features/themeSlice";

const StandartLO: NextPage = ({ children }) => {
  const theme = useAppSelector((state) => state.theme.theme);
  // const dispatch = useAppDispatch();

  return (
    <ThemeProvider theme={theme === "light" ? Themes.LIGHT : Themes.DARK}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default StandartLO;
