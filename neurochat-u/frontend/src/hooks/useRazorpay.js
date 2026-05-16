import { useEffect, useState } from 'react';

export function useRazorpay() {
  const [loaded, setLoaded] = useState(
    () => typeof window !== 'undefined' && Boolean(window.Razorpay)
  );

  useEffect(() => {
    if (window.Razorpay) {
      setLoaded(true);
      return undefined;
    }

    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    script.onload = () => setLoaded(true);
    document.body.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return loaded;
}
