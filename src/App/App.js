import logo from '../logo.svg';
import './App.css';
import React, { useState } from "react";
import Modal from "../Modal/Modal";

export default function App() {

  const initialCount = 0;
  const [count, setCount] = useState(0);
  const bienvenue = <h1>Bienvenue chez React JS</h1>;
  const [show, setShow] = useState(false);

  function handleModal() {
    setShow(!show);
  }

  return (
    <div className="App">
      <main className="App-main">
        {bienvenue}
        <div className="modalContenu">
          <button onClick={handleModal}>
            { show ? 'Cacher' : 'Montrer' } la modal
          </button>
          {show && <Modal />}
        </div>
        <div className="compteur">
          Total : {count}
          <button onClick={() => setCount(initialCount)}>Réinitialiser</button>
          <button onClick={() => setCount((prevCount) => prevCount -1)}>-</button>
          <button onClick={() => setCount((prevCount) => prevCount +1)}>+</button>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </main>
    </div>
  );
}
