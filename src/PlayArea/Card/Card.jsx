import React, { Component } from 'react';

class Card extends Component {
    render() {

        let imgSrc = `https://deckofcardsapi.com/static/img/${this.props.code}.png`;
        let offset = this.props.offset;
        return (
            <div className='card' style={offset!==undefined?offset:{}} onClick={this.props.onClick}>
                <img src={imgSrc} alt={this.props.code}></img>
            </div>
        );
    }
}

export default Card;