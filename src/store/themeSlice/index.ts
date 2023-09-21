import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const themeName = 'theme';

export const themeSlice = createSlice({
  name: themeName,
  initialState: localStorage.getItem(themeName) ?? 'light',
  reducers: {
    setTheme: (_, action: PayloadAction<string>) => {
      return action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
