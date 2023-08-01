import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <header>
            <div>
                <nav>
                    <NavLink to="/" >Home</NavLink>
                    <NavLink to="/post" >Post</NavLink>
                    <NavLink to="/project" >Project</NavLink>
                    <NavLink to="/about" >About</NavLink>
                </nav>
            </div>
        </header>
    )
}