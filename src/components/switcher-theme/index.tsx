import React from 'react';
import './style.css';
import { useToggleTheme } from '@store/themeSlice';

const SwitcherTheme = () => {
  const [theme, setTheme] = useToggleTheme();
  return (
    <label className="switcher">
      <input
        value="theme"
        className="switcher__input"
        checked={theme === 'dark'}
        type="checkbox"
        onChange={() => setTheme()}
      />
      <span className="switcher__slider" />
    </label>
  );
};

export default SwitcherTheme;
