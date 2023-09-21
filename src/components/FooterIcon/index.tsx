import React from 'react';

import * as styled from './styled';

interface IFooterIcon {
  image: string;
  link: string;
}

const FooterIcon = ({ image, link }: IFooterIcon) => {
  return <styled.footerIcon href={link} target="_blank" $image={image}></styled.footerIcon>;
};

export default FooterIcon;
