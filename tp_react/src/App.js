import React, { Component } from 'react';
import Header from './header.js';
import Board from './board.js';
import Footer from './footer.js'
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Board/>
        <Footer/>
      </div>
    );
  }
}

export default App;
