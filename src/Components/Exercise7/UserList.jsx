import React from 'react'

function UserList({users, deleteUser}) {
    return (
        <div className="list-container">
            <h1>User List</h1>
            <div className="user-list">
                {users.map(user => {
                    return <div className="user-card" key={user.id}>
                        <p>{user.name} {user.lastname}</p>
                        <p>{user.email}</p>
                        <button onClick={(event) => deleteUser(event, user.id)}>DELETE</button>
                    </div>
                })}
            </div>
        </div>
    )
}

export default UserList
