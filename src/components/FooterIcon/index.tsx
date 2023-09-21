import { IFooterIcon } from '@components/FooterIcon/types';
import React from 'react';

import * as styled from './styled';

const FooterIcon = ({ pathImage, linkUrl }: IFooterIcon) => {
  return <styled.footerIcon href={linkUrl} target="_blank" $image={pathImage}></styled.footerIcon>;
};

export default FooterIcon;
