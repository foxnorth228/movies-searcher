import { TTheme } from '@store/themeSlice/types';
import themeDark from '@utils/themes/themeDark';
import themeLight from '@utils/themes/themeLight';

const getTheme = (name: TTheme) => {
  return {
    name,
    value: name === 'light' ? themeLight : themeDark,
  };
};

export default getTheme;
