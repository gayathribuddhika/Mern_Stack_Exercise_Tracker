import React, { Component } from 'react'

class EventBind extends Component {

    constructor (props) {
        super (props) 
        this.state = {
            message: "Hello Gayathri"
        }
    }

    clickHandler() {
        // this.setState({message: "Bye Gayathri"})
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default EventBind
