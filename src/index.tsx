import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './App';

const root = createRoot(document.getElementById('app'));

const sampleArray = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
root.render(
  <StrictMode>
    <App arr={sampleArray} />
  </StrictMode>
);
