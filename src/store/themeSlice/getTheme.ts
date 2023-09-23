import themeLight from '@utils/themes/themeLight';
import themeDark from '@utils/themes/themeDark';
import { TTheme } from '@store/themeSlice/types';

const getTheme = (name: TTheme) => {
  return {
    name,
    value: name === 'light' ? themeLight : themeDark,
  };
};

export default getTheme;
