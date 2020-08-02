import { useState, useEffect } from 'react';

export const useWindowWidth = () => {
  // if (typeof window === 'undefined') {
  // global.window = {};
  // }
  // const [width, setWidth] = useState(window.innerWidth);
  // const [width, setWidth] =
  // typeof window !== `undefined` ? useState(window.innerWidth) : null;

  const isBrowser = typeof window !== 'undefined';

  const [width, setWidth] = useState(isBrowser ? window.innerWidth : 0);

  useEffect(() => {
    if (!isBrowser) return false;
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return width;
};
