import React from 'react'

const UserList = ({users, deleteUser, editUser}) => {
    return (
        <div className="list-container">
            <h1>User List</h1>
            <div className="user-list">
                {users.map(user => {
                    return <div className="user-card" key={user.id}>
                        <p>{user.name} {user.lastname}</p>
                        <p>{user.email}</p>
                        <button className="button" onClick={(event) => deleteUser(event, user.id)}>DELETE</button>
                        <button className="button" onClick={() => editUser( user)}>EDIT</button>
                    </div>
                })}
            </div>
        </div>
    )
}

export default UserList
