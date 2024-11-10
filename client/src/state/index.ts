import { IInitialStateTypes } from "@/interfaces/redux.interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: IInitialStateTypes = {
  isSidebarCollapsed: false,
  isDarkMode: false,
};
export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setIsSidebarCollapsed: (state, action: PayloadAction<boolean>) => {
      state.isSidebarCollapsed = action.payload;
    },
    setIsDarkMode: (state, action: PayloadAction<boolean>) => {
      state.isDarkMode = action.payload;
    },
  },
});
export const { setIsSidebarCollapsed, setIsDarkMode } = globalSlice.actions;
export default globalSlice.reducer;
