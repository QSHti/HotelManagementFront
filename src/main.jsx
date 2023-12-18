import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css'; // If you have global styles

// If you're using React Router, you might also import the BrowserRouter here
import { BrowserRouter } from 'react-router-dom';

// Set up the root element for React to hook into
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component wrapped with BrowserRouter if you're using React Router
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
