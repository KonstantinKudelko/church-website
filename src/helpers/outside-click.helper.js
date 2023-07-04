import { useRef, useEffect } from 'react';

export const useOutsideClick = (callback) => {
  const ref = useRef(null);
  
  useEffect(() => {
    const handleClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      };
    };

    document.addEventListener('click', handleClick);
    
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [ref]);

  return ref;
};
