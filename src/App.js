import React from 'react';
import logo from './logo.svg';
import './App.css';

import Today from './Today/Today';
import History from './History/History';

function App() {
  return (
    <div className="">
      <div className="topheader">
        <div className="container">
          <div className="navbar">
            <div className="navbar-brand">
              <span className="navbar-item">PusherCoins</span>
            </div>
          </div>
        </div>
      </div>
      <section className="results--section">
        <div className="container">
          <h1>PusherCoins is the realtime price information about <br></br>
          BTC, ETC AND LTC.</h1>
        </div>
          <div className="result--section_inner">
            <Today></Today>
            <History></History>
          </div>
      </section>
    </div>
  );
}

export default App;
