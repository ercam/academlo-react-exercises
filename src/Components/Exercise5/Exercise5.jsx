import React, { Component } from 'react'
import "./styles.css"

export class Exercise5 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0 
        }
    }

    increse = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }
    decrease = () => {
        this.setState({
            counter: this.state.counter - 1
        })
    }
    reset = () => {
        this.setState({
            counter: 0
        })
    }
    multiplyByThree = () => {
        this.setState({
            counter: this.state.counter * 3
        })
    }
    square = () => {
        this.setState({
            counter: this.state.counter ** 2
        })
    }

    render() {
        return (
            <div>
                <h1>Counter</h1>
                <div className="counter-container">
                    <p>{this.state.counter}</p>
                    <div className="buttons-container">
                        <button onClick={this.increse}>+1</button>
                        <button onClick={this.decrease}>-1</button>
                        <button onClick={this.reset}>Reset</button>
                        <button onClick={this.multiplyByThree}>x3</button>
                        <button onClick={this.square}>^2</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Exercise5
