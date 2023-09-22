import Logo from '@components/Logo';
import Searcher from '@components/Searcher';
import SelectorGenre from '@components/SelectorGenre';
import SwitcherTheme from '@components/SwitcherTheme';
import React from 'react';

import * as styled from './styled';

const Header = () => {
  return (
    <styled.Header>
      <styled.Header__Content>
        <Logo />
        <Searcher cssRule={styled.Header__Mobile_Down} />
        <SwitcherTheme />
      </styled.Header__Content>
      <SelectorGenre />
    </styled.Header>
  );
};

export default Header;
