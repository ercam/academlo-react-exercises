import React from 'react'

const EditForm = ({user, updateUser, editInput}) => {
    return (
        <div className="form-container" onSubmit={(event) => updateUser(event, user.id)}>
            <h1>Edit</h1>
            <form className="form">
                <label>
                    Name:
                    <input type="text" name="name" value={user.name} onChange={editInput}/>
                </label>
                <label>
                    Last Name:
                    <input type="text" name="lastname" value={user.lastname} onChange={editInput}/>
                </label>
                <label>
                    Email:
                    <input type="text" name="email" value={user.email} onChange={editInput}/>
                </label>
                <label>
                    Password:
                    <input type="text" name="password" value={user.password} onChange={editInput}/>
                </label>
                <input type="submit" value="UPDATE"/>
            </form>
        </div>
    )
}

export default EditForm
