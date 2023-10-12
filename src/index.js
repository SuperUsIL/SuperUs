import React from 'react';
import App from './app';
import './css/index.css';
import { createRoot } from 'react-dom/client';

const root = document.getElementById('root');
if (root) {
    createRoot(root).render(<App />);
}
