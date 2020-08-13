import React from 'react'
import thumbnailImage from './example.jpg'

function Thumbnail() {
    return (
        <div className="thumbnail">
            <div className="image">
                <img src={thumbnailImage} alt="Thumbnail example"/>
            </div>
            <div className="avatar"></div>
            <div className="info">
                <div className="title">Lorem ipsum dolor sit amet.</div>
                <div className="channel">John Doe</div>
                <div className="views">1000 views</div>  
                <div className="date">12-08-2020</div>  
            </div>            
        </div>
    )
}

export default Thumbnail
