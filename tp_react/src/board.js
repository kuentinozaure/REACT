import React, { Component } from 'react';
import Card from './card.js'
import axios from 'axios';

//npm install axios

class Board extends Component {
  //https://pokemontcg.io/sets
  //https://durbanvillegames.co.za/wp-content/uploads/2018/10/022b075df271bea6c293a72c10a2ef4a-12.jpg
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
          {this.display()}
      </section>
    );
  }
  
  //display loading if data is not loaded else display data 
  display(){
    if(this.state.loading){
      return(this.displayLoading);
    }else{
      return(this.displayLoaded());
    }
  }
  //display screen for loading
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
  //display screen for data
  displayLoaded = () => {
    console.log(this.state.data);
    let content = this.state.data.map((pkmn, index) => {
      return (
        <Card 
            url={pkmn.imageUrl}
            name={pkmn.name}
        />
      );
    });
    console.log(content);
    return content;
  }

  componentDidMount() {
    const url = 'https://api.pokemontcg.io/v1/cards?setCode=base3';
    axios.get(url)
      .then(response => {
        this.setState({
          data: response.data.cards,
          loading: false,
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  
}

export default Board;
