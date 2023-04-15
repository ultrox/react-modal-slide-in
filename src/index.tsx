import React, { Component, useEffect, useState } from 'react';
import { render } from 'react-dom';

import './style.css';

function App() {
  const [alert, setAlert] = useState('');
  const [displayModal, setDisplayModal] = useState(false);

  useEffect(() => {
    const clearMessage = setTimeout(() => {
      setAlert('');
    }, 2000);
    return () => clearTimeout(clearMessage);
  }, [alert]);

  const toggleModal = () => setDisplayModal((s) => !s);

  return (
    <div className="App">
      <img src="/qr.svg" />
      <button className="Button CenterAlign" onClick={toggleModal}>
        Challenge
      </button>

      <div className={`Modal ${displayModal ? 'Show' : ''}`}>
        <h3>Propose Time</h3>
        <button className="Close" onClick={toggleModal}>
          &times;
        </button>
        <p className="HelpText">
          <input type="date" />
        </p>

        <button
          className="Button"
          onClick={() => {
            setAlert('You challenged Luan');
          }}
        >
          Challenge Luan
        </button>
      </div>

      <div
        className={`Overlay ${displayModal ? 'Show' : ''}`}
        onClick={toggleModal}
      />
      <p className="Alert">{alert}</p>
    </div>
  );
}

const rootElement = document.getElementById('root');
render(<App />, rootElement);
