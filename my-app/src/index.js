import React from 'https://unpkg.com/react/umd/react.development.js';
import ReactDOM from 'https://unpkg.com/react-dom/umd/react-dom.development.js';
import App from './App.js'; // Ensure this points to your main App component
import './styles.css'; // Ensure the CSS file is in the correct location

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
