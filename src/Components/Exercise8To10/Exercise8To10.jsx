import React, { Component } from 'react'
import './styles.css'
import UserList from './UserList';
import EditForm from './EditForm';

const url = "https://academlo-api-users.herokuapp.com/user/";

export class Exercise7 extends Component {
    constructor(props){
        super(props);
        this.state = {
            users: [],
            name: "",
            lastname: "",
            email: "",
            password: "",
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
        this.setState({[event.target.name] : event.target.value});
    };

    handleSubmit = (event) => {
        event.preventDefault();

        fetch("https://academlo-api-users.herokuapp.com/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: this.state.name,
                lastname: this.state.lastname,
                email: this.state.email,
                password: this.state.password
            }) 
        }).then(response => this.fetchUsers())
        .catch(error => console.log(error));

        this.setState({
            name: "",
            lastname: "",
            email: "",
            password: ""
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
            <div>
                {!this.state.toggleForm ? 
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
                    </div> :
                    <EditForm user={this.state.userEdited} updateUser={this.updateUser} editInput={this.handleInputEdit}/>
                }       
                <UserList users={this.state.users} deleteUser={this.deleteUser} editUser={this.editUser}/>
            </div>
        )
    }
}

export default Exercise7