import React from 'react';
import './style.css';
import Logo from '@components/logo';
import Searcher from '@components/searcher';
import SwitcherTheme from '@components/switcher-theme';
import SelectorGenre from '@components/selector-genre';

const Header = () => {
  return (
    <header className="header">
      <div className="header__content">
        <Logo />
        <Searcher />
        <SwitcherTheme />
      </div>
      <SelectorGenre />
    </header>
  );
};

export default Header;
