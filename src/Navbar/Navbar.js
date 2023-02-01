import React from "react";
import logo from "../Images/logo.png";
import "./Navbar.css";
// import { useNavigate,Route,Routes,BrowserRouter } from "react-router-dom";


const Navbar= ()=>{
    // let navigate=useNavigate();
    // const routeChange=()=>{
    //     let path=`/Contact`;
    //     navigate(path);
    // }  
    return(
        <nav className="nav">
        <a href="/" className="title">
            <img src={logo} alt="logo"/>
        </a>
        <ul>
            <li>
        <a href="/Services"> Services </a>
        </li>
        <li>
        <a href="/Solutions"> Solutions </a>
        </li>
        <li>
        <a href="/About"> About Us </a>
        </li>
        <li>
            {/* <BrowserRouter>
            <Routes>
            <Route>
        <button className="contact" id="contact" onClick={routeChange}> Contact Us </button>
        </Route>
        </Routes>
        </BrowserRouter> */}
        <a href="./Contact" className="contact-button"> Contact
        {/* <button  className="contact-button" id="contact">Contact </button> */}
        </a>
        </li>
        </ul>
        </nav>

    )
}

export default Navbar;