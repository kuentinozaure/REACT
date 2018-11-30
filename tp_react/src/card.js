import React, { Component } from 'react';

class Card extends Component {

  render() {
    return (
        <div className="card bg-dark text-white">
            <img className="card-img-top" src={this.props.url}/>
            <p className="card-text">{this.props.name}</p>
        </div>

    );
  }

}

export default Card;
