import Logo from '@components/logo';
import Searcher from '@components/searcher';
import SelectorGenre from '@components/selector-genre';
import SwitcherTheme from '@components/switcher-theme';
import React from 'react';

import * as styled from './styled';

const Header = () => {
  return (
    <styled.Header>
      <styled.Header__Content>
        <Logo />
        <Searcher className={styled.Header__Mobile_Down} />
        <SwitcherTheme />
      </styled.Header__Content>
      <SelectorGenre />
    </styled.Header>
  );
};

export default Header;
