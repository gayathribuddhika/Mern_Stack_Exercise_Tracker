import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        name: 'Gayathri Buddhika'
     }
    render() { 
        return ( 
            <React.Fragment>
                <h1>Hello World</h1> 
                <button>Increment</button>
                <h3>{this.state.name}</h3>
            </React.Fragment>
        
        );
    }
}
 
export default Counter;