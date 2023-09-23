import { RootState } from '@src/store';
import { setTheme } from '@store/themeSlice';
import { themeName } from '@store/themeSlice/config';
import getTheme from '@store/themeSlice/getTheme';
import { useDispatch, useSelector } from 'react-redux';

export const useToggleTheme = () => {
  const theme = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();
  const toggleTheme = () => {
    const state = theme.name === 'light' ? 'dark' : 'light';
    localStorage.setItem(themeName, state);
    dispatch(setTheme(state));
  };

  return [theme, toggleTheme] as [ReturnType<typeof getTheme>, () => void];
};
