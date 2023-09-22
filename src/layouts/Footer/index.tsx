import IconLink from '@components/IconLink';
import React, { useMemo } from 'react';

import * as config from './config';
import * as styled from './styled';

const Footer = () => {
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <styled.Footer>
      <styled.Footer__Container>
        {config.textBlockValues.map((arr, i) => (
          <styled.Footer__TextBlock key={i}>
            {arr.map((str, i) => (
              <p key={i}>{str}</p>
            ))}
          </styled.Footer__TextBlock>
        ))}
        <styled.Footer__Icons>
          {config.images.map((el, i) => (
            <IconLink key={i} iconPath={el[0]} linkUrl={el[1]} />
          ))}
        </styled.Footer__Icons>
      </styled.Footer__Container>
      <styled.Footer__Title>
        {currentYear} {config.footerTitle}
      </styled.Footer__Title>
    </styled.Footer>
  );
};

export default Footer;
