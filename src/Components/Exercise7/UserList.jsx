import React from 'react'

function UserList({users}) {
    return (
        <div className="list-container">
            <h1>User List</h1>
            <div className="user-list">
                {users.map(user => {
                    return <div className="user-card" key={user.id}>
                        <p>{user.name} {user.lastname}</p>
                        <p>{user.email}</p>
                    </div>
                })}
            </div>
        </div>
    )
}

export default UserList
