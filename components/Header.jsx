import React from "react";
import { Link } from "react-router-dom"
import learning from "../images/learning.svg"



export default function Header(){
    return(
       <nav className="navbar">
        <div className="logo">
            <img src={learning} alt="chat message"/> 
            <Link to="/">My learning journal</Link>
        </div>
        <div className="nav-links">
            <Link to="/home">HOME</Link>
            <Link to="/about">ABOUT ME</Link>
        </div>
    </nav>
          
    )
}