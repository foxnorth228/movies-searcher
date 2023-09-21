import { useToggleTheme } from '@store/themeSlice/hooks';
import React, { useCallback } from 'react';

import * as config from './index.config';
import * as styled from './styled';

const SwitcherTheme = () => {
  const [theme, setTheme] = useToggleTheme();

  const inputOnChange = useCallback(() => setTheme(), [setTheme]);
  return (
    <styled.Switcher id={config.switcher_id}>
      <styled.Switcher__Input
        value={config.input_value}
        checked={theme === 'dark'}
        type={config.input_type}
        onChange={inputOnChange}
      />
      <styled.Switcher__Slider />
    </styled.Switcher>
  );
};

export default SwitcherTheme;
