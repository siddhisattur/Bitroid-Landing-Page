import React from "react";
import './Home.css';
import {useNavigate} from 'react-router-dom';



const Home=()=>{

    let navigate=useNavigate();
    const routeChange=()=>{
        let path=`/Services`;
        navigate(path);
    } 

    return(
        <div className="home">
        <p className="welcome">We are here<p className="development">From Design</p>  <p className="development">To Development</p></p>
        
        <button className="knowmore" onClick={routeChange}>Know More</button>
        </div>
    )
}


export default Home;