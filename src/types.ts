import { CSSProperties } from 'react';

export interface CloudProps {
  size?: number;
  color?: string;
  bottomOffset?: number;
  xMinMultiplier?: number;
  xMaxMultiplier?: number;
  yMinMultiplier?: number;
  yMaxMultiplier?: number;
  initialXOffset?: number;
  className?: string;
  style?: CSSProperties;
}

export interface CloudLayerProps {
  className?: string;
  style?: CSSProperties;
  backgroundColor?: string;
  height?: string | number;
  shadowOpacity?: number;
  layers?: {
    size: number;
    color: string;
    bottomOffset: number;
    randomization?: {
      xMin?: number;
      xMax?: number;
      yMin?: number;
      yMax?: number;
      initialX?: number;
    }
  }[];
}