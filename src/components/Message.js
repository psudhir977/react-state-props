import React, { Component } from 'react'

export class Message extends Component {
    
    constructor(){
        super()
        this.state={
            message: 'Welcome Visitor'
        }

    }

    //when to us curly braces
    // when to use bracket 
    
    changeMessage(){
        this.setState({message : "You are welcome"} )
    }

    render() {
        return (
            <div>
            <h1>{this.state.message}</h1>
            <h1>{this.props.name}</h1>
            <button onClick={() => this.changeMessage()} >Subscribe</button>
            </div>
        )
    }
}

//FUNCTION returns html element

export default Message
