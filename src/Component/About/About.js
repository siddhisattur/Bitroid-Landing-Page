import React from "react";
import Vector from './Vector.png';
import Vector2 from './Vector2.png';


const About=()=>{
    return(
        <>
        <h1>Who We Are</h1>
        <p>We are an Information Technology consultancy and<br/>
            software development company. We are a team of<br/>
            developers who provide digital soltuion for your business.<br/>
            From design and coding to testing, deploying and support<br/>
            we are here to take care of your requirements.<br/>
        </p>

        <div className="vission">
            <h1>Our Vision</h1>
            <p>Creating applications to<br/>
               satisfy all the user<br/>
               requirements<br/>
            </p>
            <img src={Vector}></img>
        </div>

        <div className="mission">
            <h1>Our Mision</h1>
            <p>Collaborating with customers<br/>
               to get an optimal digital<br/>
               solution to businesses.<br/>
            </p>
            <img src={Vector2}></img>
        </div>
        </>
        
    )
}

export default About;