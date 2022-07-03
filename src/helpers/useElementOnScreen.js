import { useRef, useEffect, useState } from 'react';

const useElementOnScreen = options => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const callbackFunction = (entries, observer) => {
      const [entry] = entries;
      if (!entry.isIntersecting) return;

      // animate the element and remove observer
      setIsVisible(true);
      observer.unobserve(entry.target);
    };

    // observer
    const elementObserver = new IntersectionObserver(callbackFunction, {
      root: null,
      threshold: 1,
    });

    elementObserver.observe(containerRef.current);
  }, []);

  return [containerRef, isVisible];
};

export default useElementOnScreen;
