import { useEffect, useRef, useState } from 'react';

import AppConstants from 'src/constants/app-constants';

const THRESHOLD = 0;

const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState(AppConstants.get("SCROLL_UP"));
  const [isTop, setTop] = useState(true);

  const blocking = useRef(false);
  const prevScrollY = useRef(0);

  useEffect(() => {
    prevScrollY.current = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      if (scrollY === 0) {
        setTop(true);
      } else {
        setTop(false);
      }

      if (Math.abs(scrollY - prevScrollY.current) >= THRESHOLD) {
        const newScrollDirection =
          scrollY > prevScrollY.current ? AppConstants.get("SCROLL_DOWN") : AppConstants.get("SCROLL_UP");

        setScrollDirection(newScrollDirection);

        prevScrollY.current = scrollY > 0 ? scrollY : 0;
      }

      blocking.current = false;
    };

    const onScroll = () => {
      if (!blocking.current) {

        blocking.current = true;
        window.requestAnimationFrame(updateScrollDirection);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollDirection, isTop]);

  return { scrollDirection, isTop };
};

export { useScrollDirection };
