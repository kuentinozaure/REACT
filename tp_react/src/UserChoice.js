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
            <div className="row">
                {this.displayChoice()}
            </div>
        );
      }


    displayChoice = () =>{

        if(userChoice == 0){

        }else{

        }
        return(
            <div className="col-md-4 col-md-offset-5">
                <button type="button" className="btn btn-secondary">6 CARTES</button>
            </div>
        );
    }
}
export default UserChoice;