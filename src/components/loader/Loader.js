import React from 'react'
import './loader.css'

function Loader() {
    function move() {
        var elem = document.getElementById("myBar");   
        var elem1 = document.getElementById("myBar1");   
        var width = 0;
        var id = setInterval(frame, 10);
        function frame() {
          if (width >= 100) {
            clearInterval(id);
          } else {
            width++; 
            elem1.style.width = width + '%'; 
            elem.innerHTML = "uploading" + " "+ "1" +" "+"image"+ "<br/>"+width * 1  + '%' ;
          }
        }
      }
    return (
        <div className="loader" onClick={move}>
            <div className="bk" id="myBar1">
            <div id="myBar">Uploading 1 image
            0%</div>
            </div>
        </div>
    )
}

export default Loader
