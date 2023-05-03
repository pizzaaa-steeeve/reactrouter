import React from 'react';
import {Link} from "react-router-dom";




const HomePage = () => {

    return (
        <div className="home-page">

            <div>Best Movie</div>
            <Link to="/Movie" className="btn"> Movie</Link>



        </div>
    );
};

export default HomePage;