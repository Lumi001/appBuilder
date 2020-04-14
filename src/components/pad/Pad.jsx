import React from 'react'
import './pad.css'

function Pad() {
    return (
        <div className="pad">
            <h1>PADDING</h1>
          <div className="pada">
          <div className="pad1">
          <label for="email">Top:</label>
          <input type="text" id="Top" name="Top"/>
          </div>

          <div className="pad1">
          <label for="email">Left:</label>
          <input type="text" id="left" name="left"/>
          </div>
          </div>

          <div className="pada">
          <div className="pad2">
          <label for="email">Bottom:</label>
          <input type="text" id="bottom" name="bottom"/>
          </div>

          <div className="pad3">
          <label for="email">Right:</label>
          <input type="text" id="right" name="right"/>
          </div>
          </div>
          
        </div>
    )
}

export default Pad
