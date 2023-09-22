import { useCallback, useEffect, useRef, useState } from 'react';

import { Options, TReturnUseElementOnScreen } from './types';

const useElementOnScreen = (options: Options): TReturnUseElementOnScreen => {
  const refVisibleObject = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const makeAppearRepeating = useCallback((entries: IntersectionObserverEntry[]) => {
    setIsVisible(entries[0].isIntersecting);
  }, []);

  useEffect(() => {
    const containerRefCurrent = refVisibleObject.current;
    if (containerRefCurrent === null) {
      return;
    }

    const observer = new IntersectionObserver(makeAppearRepeating, options);
    observer.observe(containerRefCurrent);
    return () => observer.unobserve(containerRefCurrent);
  }, [refVisibleObject, options, makeAppearRepeating]);

  return [refVisibleObject, isVisible];
};

export default useElementOnScreen;
