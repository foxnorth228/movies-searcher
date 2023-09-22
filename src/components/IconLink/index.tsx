import { IIconLink } from '@components/IconLink/types';
import React from 'react';

import * as styled from './styled';

const IconLink = ({ iconPath, linkUrl }: IIconLink) => {
  return <styled.IconLink href={linkUrl} target="_blank" $image={iconPath}></styled.IconLink>;
};

export default IconLink;
