import useMatchMedia from '@hooks/useMatchMedia';
import { useEffect, useState } from 'react';

const useModalDialogMovieWidth = () => {
  const mediaMatch1280 = useMatchMedia('(min-width: 992px) and (max-width: 1280px)');
  const mediaMatch991 = useMatchMedia('(min-width: 601px) and (max-width: 991px)');
  const mediaMatch600 = useMatchMedia('(min-width: 481px) and (max-width: 600px)');
  const mediaMatch480 = useMatchMedia('(max-width: 480px)');
  const [width, setWidth] = useState(640);
  useEffect(() => {
    switch (true) {
      case mediaMatch1280:
        setWidth(564);
        break;
      case mediaMatch991:
        setWidth(480);
        break;
      case mediaMatch600:
        setWidth(360);
        break;
      case mediaMatch480:
        setWidth(240);
        break;
      default:
        setWidth(640);
        break;
    }
  }, [mediaMatch1280, mediaMatch480, mediaMatch600, mediaMatch991]);
  return width;
};

export default useModalDialogMovieWidth;
