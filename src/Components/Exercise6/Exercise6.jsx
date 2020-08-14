import React, { Component } from 'react'
import "./styles.css"

export class Exercise6 extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            lastName: "",
            age: "",
            email: "",
            password: ""
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    render() {
        return (
            <div>
                <h1>Register</h1>
                <div className="form-container">
                    <form className="form">
                        <label>
                            Name: 
                            <input 
                                type="text" 
                                name="name" 
                                value={this.state.name}
                                onChange={this.handleChange}
                            />
                        </label>
                        <label>
                            Last Name: 
                            <input 
                                type="text" 
                                name="lastName" 
                                value={this.state.lastName}
                                onChange={this.handleChange}
                            />
                        </label>
                        <label>
                            Age: 
                            <input 
                                type="text" 
                                name="age" 
                                value={this.state.age}
                                onChange={this.handleChange}
                            />
                        </label>
                        <label>
                            Email: 
                            <input 
                                type="text" 
                                name="email" 
                                value={this.state.email}
                                onChange={this.handleChange}
                            />
                        </label>
                        <label>
                            Password: 
                            <input 
                                type="text" 
                                name="password" 
                                value={this.state.password}
                                onChange={this.handleChange}
                            />
                        </label>
                    </form>
                    <div className="display">
                        <h2>Info</h2>
                        <p>Name: {this.state.name}</p>
                        <p>Last Name: {this.state.lastName}</p>
                        <p>Age: {this.state.age}</p>
                        <p>Email: {this.state.email}</p>
                        <p>Password: {this.state.password}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Exercise6
