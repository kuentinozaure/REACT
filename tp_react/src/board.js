import React, { Component } from 'react';
import Card from './card.js'

class Board extends Component {
  render() {
    return (
      <section className="card-columns ">
          {this.createCard()}
      </section>
    );
  }

   createCard = () => {
    let cards = [];

    for (let i = 0; i < 9; i++) {
      cards.push(<Card cardName="Ivern_0.jpg" cardSurname="test"/>);
    }
    return cards;
  }

}

export default Board;
