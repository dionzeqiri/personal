import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import storage from "local-storage-fallback";

// Define a type for the slice state
interface ThemeState {
  theme: "change" | "light" | "dark";
}

// Define the initial state using that type
const initialState: ThemeState = {
  theme: "light",
};

export const themeSlice = createSlice({
  name: "theme",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    changeTheme: (state, action): any => {
      if (state.theme != "change") {
        state.theme = state.theme === "light" ? "dark" : "light";
      } else {
        state.theme = action.payload.theme;
      }
    },
  },
});

export const { changeTheme } = themeSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.theme.theme;

export default themeSlice.reducer;
