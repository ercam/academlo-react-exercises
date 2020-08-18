import React, { Component } from 'react'

export class EditForm extends Component {
    render() {
        return (
            <div className="form-container" onSubmit={(event) => this.props.updateUser(event, this.props.user.id)}>
                <h1>Edit</h1>
                <form className="form">
                    <label>
                        Name:
                        <input type="text" name="name" value={this.props.user.name} onChange={this.props.editInput}/>
                    </label>
                    <label>
                        Last Name:
                        <input type="text" name="lastname" value={this.props.user.lastname} onChange={this.props.editInput}/>
                    </label>
                    <label>
                        Email:
                        <input type="text" name="email" value={this.props.user.email} onChange={this.props.editInput}/>
                    </label>
                    <label>
                        Password:
                        <input type="text" name="password" value={this.props.user.password} onChange={this.props.editInput}/>
                    </label>
                    <input type="submit" value="UPDATE"/>
                </form>
            </div>
        )
    }
}

export default EditForm
