import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navbar from './navbar/navbar';
import App from './App';
import Homepage from './homepage/homepage';
import Footer from './footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar/>
    <App/>
    <Homepage/>
    <Footer />
  </React.StrictMode>
);
