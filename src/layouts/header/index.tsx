import React from 'react';
import Logo from 'src/components/Logo';
import Searcher from 'src/components/Searcher';
import SelectorGenre from 'src/components/SelectorGenre';
import SwitcherTheme from 'src/components/SwitcherTheme';

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
