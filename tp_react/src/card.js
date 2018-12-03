import React, { Component } from 'react';

class Card extends Component {

//https://stackoverflow.com/questions/38394015/how-to-pass-data-from-child-component-to-its-parent-in-reactjs
  constructor(props){
    super(props);
    this.state = {
      isDisplayed:false,
      card1:"",
      card2:"",
    }
  }
  render() {
    return (
        this.display()
    );
  }
  display = () =>{
    if(this.state.isDisplayed){
      return(this.displayCardPicture())
    }
    else{
      return(this.displayCardBack())
    }
  }

  displayCardPicture = () =>{
    return(
      <div className="card bg-dark text-white" id={this.props.cardId} onClick={this.onClickOnCard.bind(this,1)}>
          <img className="card-img-top" src={this.props.url}/>
          <p className="card-text">{this.props.name}</p>
      </div>
    );
  }
  displayCardBack = () => {
    return (
      <div className="card bg-dark text-white" id={this.props.cardId} onClick={this.onClickOnCard.bind(this)}>
          <img className="card-img-top" src="https://durbanvillegames.co.za/wp-content/uploads/2018/10/022b075df271bea6c293a72c10a2ef4a-12.jpg"/>
      </div>
    );
  }

  setParentData = (value) =>{
   this.props.sendData(value);
  }

  onClickOnCard = (cards) =>{

    this.props.sendData(cards);

    /*if(this.state.isDisplayed){
      let i=this.state.returnCard+1;
      this.setState({
        isDisplayed:false,
        returnCard:i,
      })
    }else{
      this.setState({
        isDisplayed:true,
        returnCard:0,
      })
    }*/
  }
}
export default Card;
