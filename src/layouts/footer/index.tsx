import IconLink from 'src/components/IconLink';
import React, { useMemo } from 'react';

import * as styled from './styled';

const Footer = () => {
  const currentYear = useMemo(() => new Date().getFullYear(), []);
  const images = [
    ['./icon-facebook.svg', 'https://www.facebook.com/'],
    ['./icon-twitter.svg', 'https://twitter.com/'],
    ['./icon-instagram.svg', 'https://www.instagram.com/'],
    ['./icon-linkedin.svg', 'https://www.linkedin.com/'],
  ];
  return (
    <styled.Footer>
      <styled.Footer__Container>
        <styled.Footer__TextBlock__First>
          <p>TermsPrivacyPolicy & Safety</p>
          <p>How YouTube works</p>
          <p>Test new features</p>
        </styled.Footer__TextBlock__First>
        <styled.Footer__TextBlock__Second>
          <p>About Press Copyright</p>
          <p>Contact us Creators</p>
          <p>Advertise Developers</p>
        </styled.Footer__TextBlock__Second>
        <styled.Footer__Icons>
          {images.map((el, i) => (
            <IconLink key={i} image={el[0]} link={el[1]} />
          ))}
        </styled.Footer__Icons>
      </styled.Footer__Container>
      <styled.Footer__Title>{currentYear} Modsen company</styled.Footer__Title>
    </styled.Footer>
  );
};

export default Footer;
