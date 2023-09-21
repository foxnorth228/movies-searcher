import { useToggleTheme } from '@store/themeSlice';
import React from 'react';

import * as styled from './styled';

const SwitcherTheme = () => {
  const [theme, setTheme] = useToggleTheme();
  return (
    <styled.Switcher id="switcher-theme">
      <styled.Switcher__Input
        value="theme"
        checked={theme === 'dark'}
        type="checkbox"
        onChange={() => setTheme()}
      />
      <styled.Switcher__Slider />
    </styled.Switcher>
  );
};

export default SwitcherTheme;
