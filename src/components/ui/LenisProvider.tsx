'use client';

import { ReactLenis, useLenis } from 'lenis/react';
import 'lenis/dist/lenis.css'; // Import the CSS for Lenis
import React, { useState, useEffect } from 'react';

interface LenisProviderProps {
  children: React.ReactNode;
}

const LenisProvider: React.FC<LenisProviderProps> = ({ children }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useLenis(() => {
    // console.log('Scroll event:', scroll);
  });

  // Don't render Lenis until mounted to prevent hydration mismatch
  if (!isMounted) {
    return <>{children}</>;
  }

  return (
    <ReactLenis root>
      {children}
    </ReactLenis>
  );
};

export default LenisProvider; 