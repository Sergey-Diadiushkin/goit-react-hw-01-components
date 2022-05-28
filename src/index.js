import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { Painting } from 'components/Profile';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Painting />
  </React.StrictMode>
);

