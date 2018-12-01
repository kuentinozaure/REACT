import React, { Component } from 'react';

class header extends Component {
  render() {
    return (
      <div className="bg-dark">
        <nav className="navbar bg-dark">
            <img className="img-responsive" src="https://cdn.icon-icons.com/icons2/851/PNG/128/pikachu_icon-icons.com_67535.png" />  
            <span className="navbar-brand text-secondary">POKEMON MEMO</span>
        </nav>
      </div>
    );
  }
}
export default header;
