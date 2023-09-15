import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@src/store';
import { useDispatch, useSelector } from 'react-redux';

const themeName = 'theme';
export const themeSlice = createSlice({
  name: themeName,
  initialState: localStorage.getItem(themeName) ?? 'light',
  reducers: {
    toggleTheme: (state) => {
      const theme = state === 'light' ? 'dark' : 'light';
      localStorage.setItem(themeName, theme);
      return theme;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export const useToggleTheme = () => {
  const dispatch = useDispatch();
  return [useSelector((state: RootState) => state.theme), () => dispatch(toggleTheme())] as [
    string,
    () => void,
  ];
};
export default themeSlice.reducer;
