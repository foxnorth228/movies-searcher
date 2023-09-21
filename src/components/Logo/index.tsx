import { logoTitle } from '@components/Logo/index.config';
import React from 'react';

import * as styled from './styled';

const Logo = () => {
  return (
    <styled.logo>
      <styled.logoIcon></styled.logoIcon>
      <h1>{logoTitle}</h1>
    </styled.logo>
  );
};

export default Logo;
