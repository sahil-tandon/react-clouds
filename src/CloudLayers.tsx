import React from 'react';
import { Clouds } from './Clouds';
import { CloudLayerProps } from './types';

export const CloudLayers: React.FC<CloudLayerProps> = ({
  className = '',
  style = {},
  backgroundColor = '#ffa6b9',
  height = '24rem',
  shadowOpacity = 0.1,
  layers = [
    {
      size: 120,
      color: '#ffdbde',
      bottomOffset: 160,
      randomization: {
        xMin: 0.5,
        xMax: 0.7,
        yMin: 0.1,
        yMax: 0.3,
        initialX: 0.4
      }
    },
    {
      size: 110,
      color: '#ffe4e9',
      bottomOffset: 80,
      randomization: {
        xMin: 0.45,
        xMax: 0.65,
        yMin: 0.05,
        yMax: 0.25,
        initialX: 0.45
      }
    },
    {
      size: 100,
      color: '#ffffff',
      bottomOffset: 0,
      randomization: {
        xMin: 0.4,
        xMax: 0.6,
        yMin: 0.03,
        yMax: 0.2,
        initialX: 0.5
      }
    }
  ]
}) => {
  return (
    <div 
      className={`relative ${className}`}
      style={{ 
        backgroundColor,
        height,
        width: '100%',
        overflow: 'hidden',
        ...style 
      }}
    >
      {layers.map((layer, index) => (
        <div 
          key={index}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            filter: `drop-shadow(0 2px 3px rgba(0, 0, 0, ${shadowOpacity * (1 - index * 0.2)}))`
          }}
        >
          <Clouds 
            size={layer.size}
            color={layer.color}
            bottomOffset={layer.bottomOffset}
            xMinMultiplier={layer.randomization?.xMin}
            xMaxMultiplier={layer.randomization?.xMax}
            yMinMultiplier={layer.randomization?.yMin}
            yMaxMultiplier={layer.randomization?.yMax}
            initialXOffset={layer.randomization?.initialX}
          />
        </div>
      ))}
    </div>
  );
};