import React from 'react';
import * as styled from './styled';

const Footer = () => {
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
          <i style={{ backgroundImage: "url('./icon-facebook.svg')" }}></i>
          <i style={{ backgroundImage: "url('./icon-twitter.svg')" }}></i>
          <i style={{ backgroundImage: "url('./icon-instagram.svg')" }}></i>
          <i style={{ backgroundImage: "url('./icon-linkedin.svg')" }}></i>
        </styled.Footer__Icons>
      </styled.Footer__Container>
      <styled.Footer__Title>2023 Modsen company</styled.Footer__Title>
    </styled.Footer>
  );
};

export default Footer;
