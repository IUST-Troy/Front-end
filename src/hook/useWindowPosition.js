import { useLayoutEffect, useState } from 'react';

export default function useWindowPosition() {
  const [animation, setAnimation] = useState(false);

  useLayoutEffect(() => {
    function updatePosition() {
      const offetSetHeight = window.document.documentElement.offsetHeight;
      if (window.pageYOffset > offetSetHeight * 0.5) {
        setAnimation(true);
      } else {
        setAnimation(false);
      }
    }
    window.addEventListener('scroll', updatePosition);
    return () => window.removeEventListener('scroll', updatePosition);
  }, []);

  return animation;
}
