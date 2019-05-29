import React, { Component } from 'react';

class Timer extends Component {

    timerDelay = 500;
    isPaused = false;

    constructor(props) {
        super(props);
        this.state = { timeElapsedMs: 0 };
    }

    startTimer() {
        this.timerId = setTimeout(() => {
            this.setState((state) => (
                { timeElapsedMs: state.timeElapsedMs + this.timerDelay }
            ));
            this.startTimer();
        }, this.timerDelay);
    }

    componentDidMount() {
        this.startTimer();
    }

    componentWillUnmount() {
        this.stopTimer();
    }

    stopTimer() {
        clearTimeout(this.timerId);
    }

    togglePause() {
        this.isPaused = !this.isPaused;

        if (this.isPaused) this.stopTimer();
        else this.startTimer();

        this.props.setPause(this.isPaused);
    }

    render() {
        if(this.props.paused) this.stopTimer();

        let currentTime = `${Math.floor(this.state.timeElapsedMs / 1000)} seconds`
        return (
            <time className='timer' onClick={this.togglePause.bind(this)}>{currentTime}</time>
        );
    }
}

export default Timer;