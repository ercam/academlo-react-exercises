import React, { useState } from 'react'
import Icon from './Icon'

function Sidebar() {
    const [icons, setIcons] = useState([
        {
            iconName: "home",
            title: "Principal"
        },
        {
            iconName: "local_fire_department",
            title: "Trends"
        },
        {
            iconName: "subscriptions",
            title: "Subscriptions",
        },
        {
            iconName: "video_library",
            title: "Library"
        }
    ])
    return (
        <div>
            {icons.map(icon => <Icon icon={icon} />)} 
        </div>
    )
}

export default Sidebar