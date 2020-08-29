import React, { Component } from 'react'
import './styles.css'
import UserList from './UserList';
import EditForm from './EditForm';
import Form from './Form';

const url = "https://academlo-api-users.herokuapp.com/user/";

export class Exercise7 extends Component {
    constructor(props){
        super(props);
        this.state = {
            users: [],
            inputUser: {
                name: "",
                lastname: "",
                email: "",
                password: ""
            },
            userEdited: {},
            toggleForm: false
        }
    }

    fetchUsers = () => {
        fetch("https://academlo-api-users.herokuapp.com/users")
            .then(response => response.json())
            .then(users => {
                this.setState({users: users.data});
            })
            .catch(error => console.log('error:', error));
    };

    componentDidMount(){
        this.fetchUsers();
    };

    handleChange = (event) => {
        this.setState({
            inputUser: {
                ...this.state.inputUser,
                [event.target.name] : event.target.value}
            });
    };

    handleSubmit = (event) => {
        event.preventDefault();

        fetch("https://academlo-api-users.herokuapp.com/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: this.state.inputUser.name,
                lastname: this.state.inputUser.lastname,
                email: this.state.inputUser.email,
                password: this.state.inputUser.password
            }) 
        }).then(response => this.fetchUsers())
        .catch(error => console.log(error));

        this.setState({
            inputUser: {
                name: "",
                lastname: "",
                email: "",
                password: ""
            }
        });
    };

    deleteUser = (event, id) => {
        event.preventDefault();

        fetch(url+id, { method: "DELETE"})
            .then(response => this.fetchUsers())
            .catch(error => console.log(error));
    };

    updateUser = (event, id) => {
        event.preventDefault();

        fetch(url+id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: this.state.userEdited.name,
                lastname: this.state.userEdited.lastname,
                email: this.state.userEdited.email,
                password: this.state.userEdited.password
            })})
            .then(response => this.fetchUsers())
            .catch(error => console.log(error))

        this.setState({
            toggleForm: false
        })
    };

    editUser = (user) => {
        this.setState({
            userEdited: user,
            toggleForm: true
        });
    };

    handleInputEdit = (event) => {
        this.setState({
            userEdited: {
                ...this.state.userEdited,
                [event.target.name] : event.target.value
            }
        });
    };

    render() {
        return (
            <div className="container">
                {!this.state.toggleForm ? 
                    <Form user={this.state.inputUser} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
                    :
                    <EditForm user={this.state.userEdited} updateUser={this.updateUser} editInput={this.handleInputEdit}/>
                }       
                <UserList users={this.state.users} deleteUser={this.deleteUser} editUser={this.editUser}/>
            </div>
        )
    }
}

export default Exercise7