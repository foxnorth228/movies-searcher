import useMatchMedia from '@hooks/useMatchMedia';
import { useEffect, useState } from 'react';

import * as config from './config';

export const useWidthDependNum = () => {
  const mediaMatch = useMatchMedia(config.matchMedia);
  const [numPerPageMovies, setNumPerPageMovies] = useState(
    mediaMatch ? config.numMobile : config.numDesktop
  );
  useEffect(() => {
    setNumPerPageMovies(mediaMatch ? config.numMobile : config.numDesktop);
  }, [mediaMatch]);
  return numPerPageMovies;
};

export default useWidthDependNum;
