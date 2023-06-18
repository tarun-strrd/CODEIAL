import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import storeCreation from './store';

const store = storeCreation();
console.log({ state: store.getState() });
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
