import React from "react";
import Solution_Card from "./Solution-card";
import './Solution.css';
import Individuals from "./Individuals.png";
import Organizations from "./Organizations.png";
import Startups from "./Startups.png";

const Solutions=()=>{
    return(
        <div className="solution">
        <h1>Our Solutions</h1>
        <p className="solution-1">We at Bitroid help you build <br/> your own Web apps, mobile <br/> applications and many more <br/>according to your <br/>needs .</p>
        <p className="solution-2">We work with diversified organizations, emerging <br/> startups and varried individuals to create tools <br/> and technologies from your ideas.</p>
        <img className="individuals" src={Individuals}></img>
        <img className="startups" src={Startups}></img>
        <img className="organizations" src={Organizations}></img>
        <Solution_Card/>
        </div>
    )
}

export default Solutions;