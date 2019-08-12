import React, { Component } from 'react'

export class StandardGame extends Component {
    
    render() {
        return (
            <div>
                <p>A number from 1-10 was generated.</p>
                <p>Enter your guess..</p>
                <form onSubmit={this.props.submitGuess}>
                    <input type="text" value={this.props.currentGuess} onChange={this.props.handleGuess}></input>
                    <input type="submit" value="Submit guess" />
                </form>

                <br/><br/>
                <div># of guesses: <span>{this.props.numberOfGuesses}</span></div>
                <br/><br/><br/><br/><br/><br/>
                <button onClick={this.props.resetGame}>Reset Game</button>
            </div>
        )
    }
}

export default StandardGame
