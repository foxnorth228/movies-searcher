import { RootState } from '@src/store';
import { setTheme, themeName } from '@store/themeSlice';
import { useDispatch, useSelector } from 'react-redux';

export const useToggleTheme = () => {
  const stateTheme = useSelector((state: RootState) => state.theme);

  const dispatch = useDispatch();
  const toggleTheme = () => {
    const state = stateTheme === 'light' ? 'dark' : 'light';
    localStorage.setItem(themeName, state);
    dispatch(setTheme(state));
  };

  return [stateTheme, toggleTheme] as [string, () => void];
};
