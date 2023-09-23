import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { theme, themeName } from '@store/themeSlice/config';
import getTheme from '@store/themeSlice/getTheme';
import { TTheme } from '@store/themeSlice/types';

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
