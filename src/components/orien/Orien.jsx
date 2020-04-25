import React from 'react'
import './orien.css'
import h from './icons/H.svg'
import v from './icons/V.svg'

function Orien() {
    return (
        <div className="orien">
            <h1>ORIENTATION</h1>
            <p>Orientation type</p>
            <div className="orien-flex">

               <div className="con"> 
               <label for="horizontal"><img src={h} alt="" /></label>
               <input type="text" id="horizontal" name="horizontal" placeholder="Horizontal"/>
                </div>

                <div className="con">
                <label for="vertival"><img src={v} alt="" /></label>
                <input type="text" id="vertical" name="vertical" placeholder="Vertical"/>
                </div>
            </div>
        </div>
    )
}

export default Orien
