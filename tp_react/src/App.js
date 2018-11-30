import React, { Component } from 'react';
import Header from './header.js';
import Board from './board.js';
import Footer from './footer.js'
import './App.css';

//npm install axios

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
