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

               <button className="con"> 
               <img src={h} alt="" />
                Horizontal
                </button>

                <button className="con1">
                    <img src={v} alt="" />
                    Vertical
                </button>
            </div>
        </div>
    )
}

export default Orien
