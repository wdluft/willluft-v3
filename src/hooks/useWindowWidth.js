import { useState, useEffect } from 'react';

export const useWindowWidth = () => {
  if (typeof window === 'undefined') {
    global.window = {};
  }
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
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
