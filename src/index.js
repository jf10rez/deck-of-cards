import React from 'react';
import ReactDOM from 'react-dom/client';
import { DeckApp } from './DeckApp';

import './index.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <DeckApp />
  </React.StrictMode>
);
