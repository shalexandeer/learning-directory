import React from 'react';
import { App } from 'konsta/react';
import BadgePage from './Badge';

export default function MyApp() {
  return (
    <>
      {/* App component ideally should be the main root component */}
      <App theme="ios" safeAreas>
        {/* rest of Konsta UI components */}
        <h1>halo</h1>
        <BadgePage/>
      </App>
    </>
  );
}

