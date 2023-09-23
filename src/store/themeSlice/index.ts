import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import getTheme from '@store/themeSlice/getTheme';
import { TTheme } from '@store/themeSlice/types';
import { theme, themeName } from '@store/themeSlice/config';

export const themeSlice = createSlice({
  name: themeName,
  initialState: getTheme(theme as TTheme),
  reducers: {
    setTheme: (_, action: PayloadAction<TTheme>) => {
      return getTheme(action.payload);
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
