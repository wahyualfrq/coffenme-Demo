'use client';

import React, { useState, useEffect } from 'react';
import Image, { ImageProps } from 'next/image';

export default function ImageWithSkeleton(props: ImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  // Reset loaded state when src changes
  useEffect(() => {
    setIsLoaded(false);
  }, [props.src]);

  return (
    <>
      {!isLoaded && (
        <div className="absolute inset-0 bg-muted animate-pulse z-0" />
      )}
      <Image
        {...props}
        onLoad={(e) => {
          setIsLoaded(true);
          if (props.onLoad) props.onLoad(e);
        }}
        className={`${props.className || ''} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300 relative z-10`}
      />
    </>
  );
}
