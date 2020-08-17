import React, { Component } from 'react'
import Form from './Form';
import './styles.css'

export class Exercise7 extends Component {
    constructor(props){
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount(){
        fetch("https://academlo-api-users.herokuapp.com/users")
            .then(response => response.json())
            .then(users => {
                console.log(users);
                this.setState({users: users.data});
            })
            .catch(error => console.error('error:', error));
    }

    render() {
        // console.log(this.state.users);
        return (
            <div>
                <Form />
                {/* {this.state.users.map(user => <div>Name: {user.name}</div>)} */}
            </div>
        )
    }
}

export default Exercise7