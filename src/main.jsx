import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// Function to handle incoming messages
window.addEventListener('message', (event) => {
    console.log("onMessage", event.origin, event.data)
    // Ensure the message is from the expected origin
    if (
        event.origin !== 'https://myowncorp3-dev-ed.develop.lightning.force.com' ||
        event.origin !== 'https://myowncorp3-dev-ed.develop.my.salesforce.com/'
    ) {
        return;
    }

    // Handle the message
    const { data } = event;
    console.log('Received message REACT:', data);

    // Respond to specific messages
    if (data.type === 'greeting') {
        window.parent.postMessage({ type: 'response', message: 'Hello from React!' }, event.origin);
    }
});

