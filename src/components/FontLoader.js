"use client";
import { useState, useEffect } from 'react';

export default function FontLoader({ children }) {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    if (document.fonts) {
      document.fonts.load("1rem 'NotoSansBengali'").then(() => {
        setFontLoaded(true);
      });
    } else {
      // Fallback
      setFontLoaded(true);
    }
  }, []);

  if (!fontLoaded) {
    return (
      <div className="font-loader">
        <div className="loader-spinner"></div>
      </div>
    );
  }
  
  return <>{children}</>;
}
