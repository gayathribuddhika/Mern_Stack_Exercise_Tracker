import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        name: 'Gayathri Buddhika',
        count: 0,
        imgUrl: 'https://picsum.photos/200' 
     }
    render() { 
        return ( 
            <div>
                <h1>Hello World</h1> 
                <button className = "btn btn-success">Increment</button>
                <h3>{ this.state.name }</h3>
                <h3>{ this.formatCount() }</h3>
                <img src={this.state.imgUrl}/>
            </div>
        
        );
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
        // const a = <h1>Zero</h1>;
        // return count === 0 ? a : count;
        // or return count === 0 ? <h1>Zero</h1> : count; 
    }
}
 
export default Counter;