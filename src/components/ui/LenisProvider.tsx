'use client';

import { ReactLenis, useLenis } from 'lenis/react';
import 'lenis/dist/lenis.css'; // Import the CSS for Lenis
import React from 'react';

interface LenisProviderProps {
  children: React.ReactNode;
}

const LenisProvider: React.FC<LenisProviderProps> = ({ children }) => {
  useLenis(() => {
    // console.log('Scroll event:', scroll);
  });

  return (
    <ReactLenis root>
      {children}
    </ReactLenis>
  );
};

export default LenisProvider; 