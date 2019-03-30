import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';

import {Icon} from 'react-fa'
import * as serviceWorker from './serviceWorker';

import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Author from './components/Author';
import Popper from 'popper.js';

import './css/slick.css';
import './css/slick-theme.css';

window.$ = window.jQuery = require('jquery');
window.Popper = Popper;

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MainContent />
        <Footer />
        <Author />
      </div>
    );
  }
}




/*import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
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
        </header>
      </div>
    );
  }
}

export default App;*/
