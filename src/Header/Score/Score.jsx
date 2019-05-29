import React, { Component } from 'react';

class ScorePanel extends Component {
    render() {
        return (
            <span className='score'>{this.props.score} points</span>
        );
    }
}

export default ScorePanel;