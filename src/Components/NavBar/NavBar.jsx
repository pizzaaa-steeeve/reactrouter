import React from 'react';
import {Link} from "react-router-dom";


const NavBar = () => {
    return (
        <div className="marge-nav">
            <div className="navbar">
                <nav className="nlink">
                    <Link to="/">Home</Link>
                    <Link to="Movie">Movie</Link>
                </nav>
            </div>

        </div>
    );
};

export default NavBar;