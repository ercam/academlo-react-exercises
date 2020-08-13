import React from 'react'
import Icon from './Icon'

function Sidebar() {
    const icons = [
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
    ];

    return (
        <div className="sidebar">
            {icons.map(icon => <Icon icon={icon} />)} 
        </div>
    )
}

export default Sidebar