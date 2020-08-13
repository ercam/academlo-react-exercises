import React from 'react'

function Icon({icon}) {
    return (
        <a href="youtube.com" className="icon">
            <i className="material-icons">{icon.iconName}</i>
            <div>{icon.title}</div>
        </a>
    )
}

export default Icon
