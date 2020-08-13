import React from 'react'
import Logo from './Logo'
import Searchbar from './Searchbar'
import Icon from './Icon'
import Login from './Login'

function Navbar() {
    const icons = [
        {iconName: "video_call", title: ""},
        {iconName: "apps", title: ""},
        {iconName: "notifications", title: ""}
    ]
    return (
        <div className="navbar">
            <Logo />
            <Searchbar />
            <div className="right">
                {icons.map(icon => <Icon icon={icon}/>)}
                <Login />
            </div>
        </div>
    )
}

export default Navbar

