import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface ThemeState {
  selectedTheme: 'light' | 'dark' | 'system';
}

const initialState: ThemeState = {
  selectedTheme: 'light',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeState['selectedTheme']>) => {
      state.selectedTheme = action.payload;
    },
    switchTheme: (state) => {
      state.selectedTheme = state.selectedTheme === 'light' ? 'dark' : 'light';
    },
  },
});

export const { setTheme, switchTheme } = themeSlice.actions;

export default themeSlice.reducer;
