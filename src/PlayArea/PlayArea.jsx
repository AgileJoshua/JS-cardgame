import React, { Component } from 'react';
import './PlayArea.css';
import Card from './Card/Card';
import Discard from './Discard/Discard';
import drawCard from '../Game/drawCard';


import PropTypes from 'prop-types';

class PlayArea extends Component {
    timerDelay = 3000;
    cardCount = 0;

    constructor(props) {
        super(props);
        this.state = {
            computerCard: drawCard(),
            playerCard: drawCard(),
            discardedCards: []
        };
        this.isPaused = this.props.paused;
    }

    startTimer() {
        this.timerId = setTimeout(() => {
            this.drawComputerCard();
            this.startTimer();
        }, this.timerDelay);
    }

    drawComputerCard() {
        this.setState((state) => {
            let newDiscards = state.discardedCards;
            newDiscards.push(state.computerCard);
            return {
                discardedCards: newDiscards,
                computerCard: drawCard()
            };
        });
    }

    drawPlayerCard() {
        this.setState((state) => {
            let newDiscards = state.discardedCards;
            newDiscards.push(state.playerCard);
            return {
                discardedCards: newDiscards,
                playerCard: drawCard()
            };
        });
        this.drawComputerCard();
        this.calculateScore();
        this.cardCount++;
        if(this.cardCount >= this.props.cardsToPlay){
            this.props.gameOver();
        }
    }

    calculateScore() {
        let scoreDelta = -1;
        if (
            this.state.computerCard.charAt(0) === this.state.playerCard.charAt(0)
            ||
            this.state.computerCard.charAt(1) === this.state.playerCard.charAt(1)
        ) {
            scoreDelta = 1;
        }

        this.props.updateScore(scoreDelta);
    }

    componentDidMount() {
        this.startTimer();
    }

    componentWillUnmount() {
        this.stopTimer();
    }

    componentDidUpdate(){
        if(this.isPaused !== this.props.paused){
            this.isPaused = this.props.paused;
            if(this.isPaused) this.stopTimer();
            else this.startTimer();
        }
    }

    stopTimer(){
        clearTimeout(this.timerId);
    }

    render() {
        return (
            <section className='playarea'>
                <Discard codes={this.state.discardedCards}></Discard>
                <Card code={this.state.computerCard}></Card>
                <Card code={this.state.playerCard} onClick={this.drawPlayerCard.bind(this)}></Card>
            </section>
        );
    }
}

PlayArea.defaultProps = {cardsToPlay: 5};


PlayArea.propTypes = {gameOver:PropTypes.func, updateScore:PropTypes.func   };

export default PlayArea;