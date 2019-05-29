import React, { Component } from 'react';

class GameOver extends Component {
    render() {
        return (
            <span className='score'>GAME OVER: {this.props.score} points</span>
        );
    }
}

export default GameOver;