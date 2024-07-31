import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// This function initializes the React app
window.initializeReactApp = function (rootElement) {
    if (rootElement) {
        ReactDOM.createRoot(rootElement).render(
            <React.StrictMode>
                <App />
            </React.StrictMode>
        );
    }
};

window.initializeReactApp(document.getElementById('root'));
