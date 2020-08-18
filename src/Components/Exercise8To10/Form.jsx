import React from 'react'

const Form = ({user, handleSubmit, handleChange}) => {
    return (
        <div className="form-container" onSubmit={handleSubmit}>
            <h1>Register</h1>
            <form className="form">
                <label>
                    Name:
                    <input type="text" name="name" value={user.name} onChange={handleChange}/>
                </label>
                <label>
                    Last Name:
                    <input type="text" name="lastname" value={user.lastname} onChange={handleChange}/>
                </label>
                <label>
                    Email:
                    <input type="text" name="email" value={user.email} onChange={handleChange}/>
                </label>
                <label>
                    Password:
                    <input type="text" name="password" value={user.password} onChange={handleChange}/>
                </label>
                <input type="submit" value="SEND"/>
            </form>
        </div>
    )
}

export default Form
