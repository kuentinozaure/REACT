import React, { Component } from 'react';
import Board from './board.js';

class UserChoice extends Component {

    constructor(props){
        super(props);

        this.state ={
            isChoiced : false,
            userChoice :0,
        }
    }
    render() {
        return (
            this.display()
        );
      }


    display = () => {
        if(this.state.isChoiced === false){
            return(this.displayButton());
        }else {
           return(this.displayBoard());
        }  
    }

    clickButtonChoice = (buttonVal) =>{
        this.setState({
            userChoice:buttonVal,
            isChoiced:true,
        })
    }
    displayBoard = () => {
        
        return(
            <Board userChoice={this.state.userChoice}/>
        );
    }
    displayButton = () =>{
        return(
            <div className="row">
                <div className="col-md-4 col-md-offset-5"></div>
                <div className="col-md-4 col-md-offset-5">
                    <div className="btn-group-vertical">
                        <button type="button" className="btn btn-secondary"  onClick={this.clickButtonChoice.bind(this,6)}>AFFICHER 6 CARTES</button>
                        <button type="button" className="btn btn-secondary"  onClick={this.clickButtonChoice.bind(this,12)}>AFFICHER 12 CARTES</button>
                        <button type="button" className="btn btn-secondary"  onClick={this.clickButtonChoice.bind(this,18)}>AFFICHER 18 CARTES</button>
                        <button type="button" className="btn btn-secondary"  onClick={this.clickButtonChoice.bind(this,24)}>AFFICHER 24 CARTES</button>
                        <button type="button" className="btn btn-secondary"  onClick={this.clickButtonChoice.bind(this,30)}>AFFICHER 30 CARTES</button>
                        <button type="button" className="btn btn-secondary"  onClick={this.clickButtonChoice.bind(this,36)}>AFFICHER 36 CARTES</button>
                        <button type="button" className="btn btn-secondary"  onClick={this.clickButtonChoice.bind(this,102)}>AFFICHER 102 CARTES</button>
                    </div>
                </div>
                <div className="col-md-4 col-md-offset-5"></div>
            </div>
                
        );
    }
}
export default UserChoice;