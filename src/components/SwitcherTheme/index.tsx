import { useToggleTheme } from '@store/themeSlice/hooks';
import React, { useCallback, useMemo } from 'react';

import * as config from './config';
import * as styled from './styled';

const SwitcherTheme = () => {
  const dataInput = useMemo(() => config.input, []);
  const [theme, setTheme] = useToggleTheme();

  const inputOnChange = useCallback(() => setTheme(), [setTheme]);
  return (
    <styled.Switcher id={config.switcher_id}>
      <styled.Switcher__Input
        type={dataInput.type}
        value={dataInput.value}
        checked={theme.name === 'dark'}
        onChange={inputOnChange}
      />
      <styled.Switcher__Slider />
    </styled.Switcher>
  );
};

export default SwitcherTheme;
