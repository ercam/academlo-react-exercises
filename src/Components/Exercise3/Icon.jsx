import React from 'react'

function Icon({icon}) {
    return (
        <div className="icon">
            <i className="material-icons">{icon.iconName}</i>
            <div>{icon.title}</div>
        </div>
    )
}

export default Icon
