import React from 'react';
import * as styled from './styled';
import Logo from '@components/logo';
import Searcher from '@components/searcher';
import SwitcherTheme from '@components/switcher-theme';
import SelectorGenre from '@components/selector-genre';

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
