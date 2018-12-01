import React, { Component } from 'react';
import Header from './header.js';
import UserChoice from './UserChoice.js';
import Footer from './footer.js'
import './App.css';

//npm install axios

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <UserChoice/>
        <Footer/>
      </div>
    );
  }
}

export default App;
