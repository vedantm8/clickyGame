import React from 'react';
import MrKrabsCard from "./components/MrKrabsCard";
import SpongeBobCard from "./components/SpongeBobCard";
import SquidwardCard from "./components/SquidwardCard";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";

class App extends React.Component {
  state = {
    currentScore: 0,
    highScore: 0,
  };

  SpongeBobButton = (props) => {
    const randomNum = (Math.floor(Math.random() * 3) + 1);
    const spongeButton = 1;

    if (spongeButton === randomNum) {
      this.setState({
        currentScore: this.state.currentScore + 5
      });
    }
    else if (spongeButton !== randomNum) {
      if (this.state.currentScore > this.state.highScore) {
        this.setState({
          currentScore: this.state.highScore
  
        })
      }
      else if (this.state.currentScore <= this.state.highScore) {
        this.setState({
          currentScore: 0
        })
        return;
      }
    }
  }
  SquidwardButton = (props) => {
    const randomNum = (Math.floor(Math.random() * 3) + 1);
    const squidButton = 2;

    if (squidButton === randomNum) {
      this.setState({
        currentScore: this.state.currentScore + 5
      });
    }
    else if (squidButton !== randomNum) {
      if (this.state.currentScore > this.state.highScore) {
        this.setState({
          currentScore: this.state.highScore
  
        })
      }
      else if (this.state.currentScore <= this.state.highScore) {
        this.setState({
          currentScore: 0
        })
        return;
      }
    }

  }
  KrabButton = () => {
    const randomNum = (Math.floor(Math.random() * 3) + 1);
    const KrabsButton = 3;

    if (KrabsButton === randomNum) {
      this.setState({
        currentScore: this.state.currentScore + 5
      })
      console.log('Correct Guess: ' + this.state.currentScore);
    }
    else if (KrabsButton !== randomNum) {
      if (this.state.currentScore > this.state.highScore) {
        this.setState({
          currentScore: this.state.highScore
  
        })
      }
      else if (this.state.currentScore <= this.state.highScore) {
        this.setState({
          currentScore: 0
        })
        return;
      }
    }
  }

  render() {
    return (
      <Wrapper>
        <Title>Friends List</Title>
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
        <SpongeBobCard handleClick={this.SpongeBobButton} />
        <MrKrabsCard handleClick={this.KrabButton} />
        <SquidwardCard handleClick={this.SquidwardButton} />
      </Wrapper>
    );
  }
}

export default App;