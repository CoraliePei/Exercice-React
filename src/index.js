import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './Header/Header';
import Produit from './Produit/Produit';
import Message from './Message/Message';
import Emoji from './Emoji/Emoji';
import App from './App/App';
import Footer from './Footer/Footer';
import Contact from './Contact/Contact'

import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Cette ligne permet de positionner le header sur toutes les pages qu'elle englobe */}
        <Route path='/' element={<Header />}> 
          {/* Page d'accueil */}
          <Route index element={<App />} />
          {/* Liens cliquables */}
          <Route path='contenu' element={<App />} />
          <Route path='contact' element={<Contact />} />
          <Route path='produit' element={<Produit />} />
        </Route>
      </Routes>
    </BrowserRouter>


    {/* <Header />
    <Produit />
    <Message messagePasse="Hello !" prenom="Jane" />
    <Message messagePasse="Hello !" prenom="John" />
    <Message messagePasse="Hello !" prenom="Jean" />
    <Emoji />
    <App />
    <Footer /> */}
  </React.StrictMode>
);
