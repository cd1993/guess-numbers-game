import React, { Component } from 'react'
import StandardGame from './StandardGame'
import ExpertGame from './ExpertGame'

export class InitialView extends Component {

    render() {

        return (
            <div>
                {this.props.gameState === '' ? (
                    <div>
                        <h2>Start Game</h2>
                        <button onClick={this.props.playStandard} className="button button-standard">Standard</button>
                        <button onClick={this.props.playExpert} className="button button-expert">Expert</button>
                    </div>
                ) : (
                   <div>
                     <h4>Game has started.</h4>
                   </div>
                    
                )}

                {this.props.gameState === 'expert' && <ExpertGame numberOfGuesses={this.props.numberOfGuesses} resetGame={this.props.resetGame} />}
                {this.props.gameState === 'standard' && <StandardGame numberOfGuesses={this.props.numberOfGuesses} resetGame={this.props.resetGame} />}
            </div>
        )
    }
}

export default InitialView
