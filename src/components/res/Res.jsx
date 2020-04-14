import React, { Fragment } from 'react'
import "./res.css"

function Res() {
    return (
        <React.Fragment>
            <div className="resp">
            <h1>Responsiveness</h1>
        <div className="res">
            <div className="passprt"></div>

        <div>
        <p>Width type</p>

        <select id="width" name="width">
        <option value="left">Left</option>
        <option value="right">Right</option>
        <option value="lr">Left & Right</option>
        <option value="center">Center</option>
        </select>


        <br/>
        <p>Height type</p>
        <select id="width" name="width">
        <option value="top">Top</option>
        <option value="btm">Bottom</option>
        <option value="bt">Top & Bottom</option>
        <option value="center">Center</option>
        </select>
      

        <br/>
        <input type="checkbox" id="postion" name="position" value="position"/>
        <label for="position">Fix position while scrolling</label>
        </div>
        </div>
        </div>
        </React.Fragment>
    )
}

export default Res
