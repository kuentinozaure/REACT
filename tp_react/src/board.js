import React, { Component } from 'react';
import Card from './card.js'
import axios from 'axios';


class Board extends Component {

  constructor(props){
    super(props);
    this.state = {
      data : [],
      championsName:[],
      loading:true,
    };
  }
  render() {
    return (
      <section className="card-columns ">
          {this.display()}
      </section>
    );
  }

  //https://raw.githubusercontent.com/caro3801/vuejs-tpbase/master/public/champions.json
  
  display(){
    if(this.state.loading){
      return(this.displayLoading);
    }else{
      return(this.displayLoaded());
    }
  }

  displayLoading(){
    return(
      <div className="row">
        <div className="col-md-4 col-md-offset-5"></div>
          <div className="col-md-4 col-md-offset-5">
            <img className="" src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"/>
          </div>
        <div className="col-md-4 col-md-offset-5"></div>
      </div>
    );
  }

  componentDidMount() {
    const url = 'https://raw.githubusercontent.com/caro3801/vuejs-tpbase/master/public/champions.json';
    axios.get(url)
      .then(response => {
        this.setState({
          data: response.data.data,
          loading: false
        });
        //console.log(response.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  displayLoaded = () => {
    return "erllo"
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
