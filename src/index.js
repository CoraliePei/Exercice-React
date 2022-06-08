import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App/App';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Emoji from './Emoji/Emoji';
import Produit from './Produit/Produit';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Produit />
    <Emoji />
    <App />
    <Footer />
  </React.StrictMode>
);
