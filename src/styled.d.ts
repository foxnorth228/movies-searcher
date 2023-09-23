import 'styled-components';

import themeLight from '@utils/themes/themeLight';

type CustomTheme = typeof themeLight;

declare module 'styled-components' {
  export interface DefaultTheme extends CustomTheme {
    disableEmptyInterface?: string;
  }
}
