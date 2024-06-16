import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer(){
    return(
    <footer className="footer">
            <h2>My Learning Journal</h2>
            <p>Copyright ©2024</p>
        <div className="footLink">
            <NavLink to="/"> Desgin 1 </NavLink>
            <NavLink to="/designTwo"> Desgin 2 </NavLink>
            <NavLink to="/designThree"> Desgin 3 </NavLink>
        </div>
    </footer>
    )
}