import React, { Component } from 'react'

export class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            lastname: "",
            email: "",
            password: ""
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        fetch("https://academlo-api-users.herokuapp.com/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
              },
            body: JSON.stringify(this.state) 
        }).then(response => response.json())
        .then(results => console.log(results))
        .catch(error => console.log(error));


        this.setState({
            name: "",
            lastname: "",
            email: "",
            password: ""
        })
    }

    render() {
        console.log(this.state)
        console.log(JSON.stringify(this.state))
        return (
            <div className="form-container" onSubmit={this.handleSubmit}>
                <h1>Register</h1>
                <form className="form">
                <label>
                    Name:
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
                </label>
                <label>
                    Last Name:
                    <input type="text" name="lastname" value={this.state.lastname} onChange={this.handleChange}/>
                </label>
                <label>
                    Email:
                    <input type="text" name="email" value={this.state.email} onChange={this.handleChange}/>
                </label>
                <label>
                    Password:
                    <input type="text" name="password" value={this.state.password} onChange={this.handleChange}/>
                </label>
                <input type="submit" value="SEND"/>
            </form>
            </div>
        )
    }
}

export default Form
