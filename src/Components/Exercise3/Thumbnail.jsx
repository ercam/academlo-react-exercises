import React from 'react'
import thumbnailImage from './example.jpg'

function Thumbnail() {
    return (
        <div className="thumbnail">
            <div className="image">
                <img src={thumbnailImage} alt="Thumbnail example"/>
            </div>
            <div className="info">
                <div className="title">Lorem ipsum dolor sit amet.</div>
                <div className="user">John Doe</div>
                <div className="views">1000 views</div>    
            </div>            
        </div>
    )
}

export default Thumbnail
