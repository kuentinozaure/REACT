import React, { Component } from 'react';
import Card from './card.js'
import axios from 'axios';


class Board extends Component {

  constructor(props){
    super(props);
    this.state = {
      data : [],
      loading:true,
    };
  }
  render() {
    return (
      <section className="card-columns ">
          {}
      </section>
    );
  }

  //https://raw.githubusercontent.com/caro3801/vuejs-tpbase/master/public/champions.json
  
  componentDidMount() {
    const url = 'https://raw.githubusercontent.com/caro3801/vuejs-tpbase/master/public/champions.json';
    axios.get(url)
      .then(response => {
        this.setState({
          data: response.data,
          loading: false
        });
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  //THIS CODE IS WORKING :)
  /*afficher = () => {
    let content = this.state.data.map((user, index) => {
      return (
        <div key={index}>
          <b>Username:</b>&nbsp;{user.username},&nbsp;
          <b>Email:</b>&nbsp;{user.email}&nbsp;
        </div>
      );
    });

    return content;
  }

   createCard = () => {
    let cards = [];

    for (let i = 0; i < 9; i++) {
      cards.push(<Card cardName="Ivern_0.jpg" />);
    }
    return cards;
  }

  componentDidMount() {
    const url = 'https://jsonplaceholder.typicode.com/users';
    axios.get(url)
      .then(response => {
        this.setState({
          data: response.data,
          loading: false
        });
      })
      .catch(error => {
        console.log(error);
      });
  }*/
  
}

export default Board;
