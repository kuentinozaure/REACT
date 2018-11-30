import React, { Component } from 'react';

class Card extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
        <div className="card bg-dark text-white">
            <img className="card-img-top" src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/"+this.props.cardName}/>
            <p className="card-text">{this.props.cardName +"_"+ this.props.cardSurname}</p>
        </div>

    );
  }

}

export default Card;
