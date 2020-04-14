import React from 'react'
import './upload.css'
import pic from '../../assets/img/download.png'

function Upload() {
    return (
        <div className="up">
            <div className="img"><img src={pic} alt=""/></div>
            <h4>Upload an image on your page</h4>
            <p>jpeg,png formats accepted</p>
            <button className="btn">Upload image</button>
        </div>
    )
}

export default Upload
