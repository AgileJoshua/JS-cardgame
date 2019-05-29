import React, { Component } from 'react';

class GameTitle extends Component {
    render() {
        let { mainTitle, subTitle } = this.props;
        if (mainTitle === undefined) mainTitle = "The coolest game";
        if (subTitle === undefined) subTitle = "in the world...";
        return (
            <div>
                <h1>{mainTitle}</h1>
                <h2>{subTitle}</h2>
            </div>
        );
    }
}

export default GameTitle;