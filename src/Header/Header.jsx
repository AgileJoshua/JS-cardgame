import React, { Component } from 'react';
import './Header.css';
import GameTitle from './GameTitle/GameTitle';
import ScorePanel from './Score/Score';
import Timer from './Timer/Timer';


class Header extends Component {
    render() {
        const {score, mainTitle, subTitle, setPause, paused} = this.props.config;
        return (
            <header className='gameHeader'>
                <GameTitle mainTitle={mainTitle} subTitle={subTitle}></GameTitle>
                <ScorePanel score={score}></ScorePanel>
                <span className='spacing'>&nbsp;</span>
                <Timer paused={paused} setPause={setPause}></Timer>
            </header>
        );
    }
}

export default Header;