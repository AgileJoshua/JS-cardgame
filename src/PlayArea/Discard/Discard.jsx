import React, { Component } from 'react';
import Card from '../Card/Card';

class Discard extends Component {
    render() {
        const discards = this.props.codes.map((item, index) => { return <Card key={`${item}${index}`} code={item} offset={{left:5+(index*6), top:20+(index*20)}}></Card>});

        return (
            <div className='discard'>
                {discards}
            </div>
        );
    }
}

export default Discard;