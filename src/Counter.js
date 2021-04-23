import React, { Component, Fragment } from 'react'

export default class Counter extends Component {

    constructor(props){
        super(props)

       this.state = {
           count: 0
       }
    }

    Increment = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    Decrement = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    render() {

        const {count} = this.state

        return (
            <Fragment>
                <h1>Count: {count}</h1>
                <button onClick={this.Increment} style={{marginRight: '15px', padding: '10px', background: 'green', color: '#fff'}}>+</button>
                <button onClick={this.Decrement} style={{padding: '10px', background: 'red', color: '#fff'}}>-</button>
            </Fragment>
        )
    }
}
