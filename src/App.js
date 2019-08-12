import React, { Component } from 'react'
import './App.css';
import InitialView from './components/InitialView'

class App extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      gameState: '',
      numberOfGuesses: 0,
      secretNumber: ''
    }

    this.state = this.initialState;

    this.playStandard = this.playStandard.bind(this);

    this.playExpert = this.playExpert.bind(this);

    this.resetGame = this.resetGame.bind(this);
  }

  incrementGuesses = () => {
    this.setState({ numberOfGuesses : this.state.numberOfGuesses + 1});
  }

  playStandard = () => {
    this.setState({
      gameState: 'standard', 
      secretNumber: Math.floor((Math.random() * 10) + 1)
    });
  }

  playExpert = () => {
    this.setState({
      gameState: 'expert',
      secretNumber: Math.floor((Math.random() * 100) + 1)
    });
  }

  resetGame = () => {
    this.setState({
      gameState: '',
      numberOfGuesses: 0,
      secretNumber: ''
    })
  }

  render() {
    const { gameState, numberOfGuesses, secretNumber } = this.state;
    
    return (
      <div className="App">
        <InitialView incrementGuesses={this.incrementGuesses} secretNumber={secretNumber} numberOfGuesses={numberOfGuesses} resetGame={this.resetGame} playStandard={this.playStandard} playExpert={this.playExpert} gameState={gameState} />
      </div>
    );
  }

}

export default App;
