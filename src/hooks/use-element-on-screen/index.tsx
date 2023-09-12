import React, { useEffect, useRef, useState } from 'react';

interface Options {
  threshold: number;
}

const useElementOnScreen = (options: Options): [React.RefObject<HTMLDivElement>, boolean] => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const makeAppearRepeating = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const containerRefCurrent = containerRef.current;
    const observer = new IntersectionObserver(makeAppearRepeating, options);
    if (containerRefCurrent) {
      observer.observe(containerRefCurrent);
    }
    return () => {
      if (containerRefCurrent) {
        observer.unobserve(containerRefCurrent);
      }
    };
  }, [containerRef, options, makeAppearRepeating]);

  return [containerRef, isVisible];
};

export default useElementOnScreen;
