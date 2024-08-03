import React from "react"
import "./style.css"

import one from "./assets/images/image1.jfif"
import two from "./assets/images/image2.jfif"
import three from "./assets/images/image3.jfif"
import four from "./assets/images/image4.jfif"
import five from "./assets/images/image5.jfif"
import six from "./assets/images/image6.jfif"
import seven from "./assets/images/image7.jfif"
import eight from "./assets/images/image8.jfif"


function Cardimg()

{
    return(
        <div className="imagecard">
        <div className="card">
            <img src={one} alt="one"/>
            <h4>Nature 1 Image</h4>
        </div>

        <div className="card">
            <img src={two} alt="two"/>
            <h4>Nature 2 Image</h4>
        </div>
        <div className="card">
            <img src={three} alt="three"/>
            <h4>Nature 3 Image</h4>
        </div>
        <div className="card">
            <img src={four} alt="four"/>
            <h4>Nature 4 Image</h4>
        </div>
        <div className="card">
            <img src={five} alt="five"/>
            <h4>Nature 5 Image</h4>
        </div>
        <div className="card">
            <img src={six} alt="six"/>
            <h4>Nature 6 Image</h4>
        </div>
        <div className="card">
            <img src={seven} alt="seven"/>
            <h4>Nature 7 Image</h4>
        </div>
        <div className="card" >
            <img src={eight} alt="eight"/>
            <h4>Nature 8 Image</h4>
        </div>

        </div>
    )
}

export default Cardimg