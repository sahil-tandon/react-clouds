import React, { useState, useEffect, useRef } from 'react';
import { CloudProps } from './types';

export const Clouds: React.FC<CloudProps> = ({
  size = 100,
  color = '#fff0f3',
  bottomOffset = 0,
  xMinMultiplier = 0.45,
  xMaxMultiplier = 0.6,
  yMinMultiplier = 0.05,
  yMaxMultiplier = 0.25,
  initialXOffset = 0.45,
  className = '',
  style = {}
}) => {
  const [boxShadow, setBoxShadow] = useState('');
  const cloudRef = useRef<HTMLDivElement>(null);

  const generateShadows = () => {
    if (!cloudRef.current) return;
    
    const containerWidth = cloudRef.current.parentElement?.offsetWidth || window.innerWidth;
    const shadows = [];
    let currentX = size * initialXOffset;
    
    while (currentX < containerWidth + size) {
      // Generate random Y offset within the defined range
      const yOffset = Math.floor(
        Math.random() * (size * (yMaxMultiplier - yMinMultiplier)) + 
        (size * yMinMultiplier)
      );
      
      shadows.push(`${currentX}px ${yOffset}px ${color}`);
      
      // Calculate next X position with random increment
      const xIncrement = size * (xMinMultiplier + Math.random() * (xMaxMultiplier - xMinMultiplier));
      currentX += xIncrement;
    }

    setBoxShadow(shadows.join(', '));
  };

  useEffect(() => {
    generateShadows();

    // Handle window resize
    const handleResize = () => {
      generateShadows();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [
    size, 
    color, 
    xMinMultiplier, 
    xMaxMultiplier, 
    yMinMultiplier, 
    yMaxMultiplier, 
    initialXOffset
  ]);

  return (
    <div
      ref={cloudRef}
      className={className}
      style={{
        position: 'absolute',
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: '50%',
        backgroundColor: color,
        zIndex: 5,
        bottom: `${-size * 0.1 + bottomOffset}px`,
        left: `${-size * 0.2}px`,
        boxShadow,
        ...style
      }}
    />
  );
};

export default Clouds;