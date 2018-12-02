import React, { Component } from 'react';

class Card extends Component {

  constructor(props){
    super(props);
    this.state = {
      isDisplayed:false,
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
    }else{
      return(this.displayCardBack())
    }
  }

  displayCardPicture = () =>{
    return(
      <div className="card bg-dark text-white" id={this.props.cardId} onClick={this.onClickOnCard.bind(this)}>
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
  onClickOnCard = () =>{
    if(this.state.isDisplayed){
      this.setState({
        isDisplayed:false,
      })
    }else{
      this.setState({
        isDisplayed:true,
      })
    }
    console.log("clic sur la carte valeur du props isDisplay : "+this.props.isDisplay)
  }
}
export default Card;
