import React, { Component } from 'react';
import './Game.css';
import Header from '../Header/Header';
import PlayArea from '../PlayArea/PlayArea';
import GameOver from '../GameOver/GameOver';

class Game extends Component {

  constructor() {
    super();
    this.state = { score: 0, paused: false, gameOver: false };
  }

  updateScore(delta) {
    this.setState((state) => ({ score: state.score + delta }));
  }

  setPause(paused) {
    this.setState({ paused: paused });
  }

  gameOver() {
    this.setState({ paused: true, gameOver: true });
  }

  render() {

    const gameConfig = {
      mainTitle: 'Super Snap',
      subTitle: 'Click to match!',
      score: this.state.score,
      setPause: this.setPause.bind(this),
      paused: this.state.paused
    };

    let over = (this.state.gameOver) ? <GameOver></GameOver> : null;

    return (
      <div className="App">
        <Header config={gameConfig}></Header>
        {over}
        <PlayArea gameOver={this.gameOver.bind(this)} updateScore={this.updateScore.bind(this)} paused={this.state.paused}></PlayArea>
      </div>
    );
  }
}

export default Game;
