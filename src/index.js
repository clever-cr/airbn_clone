import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Cards from './components/Cards';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <NavBar />
    <Hero />
    <Cards />
  </React.StrictMode>
);

reportWebVitals();
