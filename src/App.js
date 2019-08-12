import React, { Component } from 'react'
import './App.css';
import InitialView from './components/InitialView'

class App extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      gameState: '',
      numberOfGuesses: 0
    }

    this.state = this.initialState;

    this.playStandard = this.playStandard.bind(this);

    this.playExpert = this.playExpert.bind(this);

    this.resetGame = this.resetGame.bind(this);
  }

  playStandard = () => {
    this.setState({
      gameState: 'standard'
    });
  }

  playExpert = () => {
    this.setState({
      gameState: 'expert'
    });
  }

  resetGame = () => {
    this.setState({
      gameState: '',
      numberOfGuesses: 0
    })
  }

  render() {
    const { gameState, numberOfGuesses } = this.state;
    
    return (
      <div className="App">
        <InitialView numberOfGuesses={numberOfGuesses} resetGame={this.resetGame} playStandard={this.playStandard} playExpert={this.playExpert} gameState={gameState} />
      </div>
    );
  }

}

export default App;
