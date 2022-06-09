import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App/App';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Emoji from './Emoji/Emoji';
import Produit from './Produit/Produit';
import Message from './Message/Message';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Produit />
    {/* <Produit titre= /> */}
    <Message messagePasse="Hello !" prenom="Jane" />
    <Message messagePasse="Hello !" prenom="John" />
    <Message messagePasse="Hello !" prenom="Jean" />
    <Emoji />
    <App />
    <Footer />
  </React.StrictMode>
);
