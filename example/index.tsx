import React from 'react';
import { Clouds, CloudLayers } from '@sahiltandon/react-clouds';

// Basic usage example
export const BasicExample = () => {
  return (
    <div style={{ position: 'relative', height: '200px', background: '#ffa6b9' }}>
      <Clouds size={100} color="#ffffff" />
    </div>
  );
};

// Advanced usage with custom configuration
export const CustomExample = () => {
  return (
    <div style={{ position: 'relative', height: '200px', background: '#ffa6b9' }}>
      <Clouds
        size={120}
        color="#ffffff"
        bottomOffset={0}
        xMinMultiplier={0.5}
        xMaxMultiplier={0.7}
        yMinMultiplier={0.1}
        yMaxMultiplier={0.3}
        initialXOffset={0.4}
      />
    </div>
  );
};

// Layered clouds example
export const LayeredExample = () => {
  return (
    <CloudLayers
      height="24rem"
      backgroundColor="#ffa6b9"
      shadowOpacity={0.1}
      layers={[
        {
          size: 120,
          color: '#ffdbde',
          bottomOffset: 160,
          randomization: {
            xMin: 0.5,
            xMax: 0.7,
            yMin: 0.1,
            yMax: 0.3,
            initialX: 0.4,
          },
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
            initialX: 0.45,
          },
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
            initialX: 0.5,
          },
        },
      ]}
    />
  );
};

// Demo page showing all examples
const App = () => {
  return (
    <div>
      <h1>React Clouds Examples</h1>

      <section>
        <h2>Basic Usage</h2>
        <BasicExample />
      </section>

      <section>
        <h2>Custom Configuration</h2>
        <CustomExample />
      </section>

      <section>
        <h2>Layered Effect</h2>
        <LayeredExample />
      </section>
    </div>
  );
};

export default App;
