import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal'; // Import Modal here
import './index.css';
import App from './App'; // Update the path as needed
import MyComponent from './MyComponent';

// Set the app element for accessibility
Modal.setAppElement('#root'); // Replace '#root' with your root element's selector

ReactDOM.render(
  <div>
    <App />
    <MyComponent />
  </div>,
  document.getElementById('root')
);
