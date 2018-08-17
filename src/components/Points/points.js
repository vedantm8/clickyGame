import React, { Component } from 'react';

class Points extends Component{
    state = {
        currentScore: 0,
        highScore: 0,
      }
    
      correctGuess = () => {
        this.setState({
          currentScore: this.state.currentScore + 5
        })
      }
      wrongGuess = () => {
        if (this.state.currentScore > this.state.highScore){
          this.setState({
            currentScore: this.state.highScore
    
          })
        }
        else if (this.state.currentScore <= this.state.highScore){
          this.setState({
            currentScore: 0
          })
          return;
        }
    
      }    

    render(){
        return(
            <div>
            <div className='row'>
                <div className='col-md-3'>
                    <center>
                        <p id='currentScore'>Current Score: {this.state.currentScore}</p>
                    </center>
                </div>
                <div className='col-md-6'>
                </div>
                <div className='col-md-3'>
                    <center>
                        <p id='highScore'>High Score: {this.state.highScore}</p>
                    </center>
                </div>
    
    
            </div>
        </div>
        );
    }
}
export default Points;