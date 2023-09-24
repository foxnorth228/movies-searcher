import { logoPath, logoTitle } from '@components/Logo/config';
import React from 'react';

import * as styled from './styled';

const Logo = () => {
  return (
    <styled.Logo>
      <styled.Logo__Icon $logoPath={logoPath}></styled.Logo__Icon>
      <h1>{logoTitle}</h1>
    </styled.Logo>
  );
};

export default Logo;
