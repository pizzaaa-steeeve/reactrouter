import React from 'react';
import Data_Movie from "../../Data/Data_Movie";
import {useNavigate} from "react-router";



const MovieListe = () => {
const navigate = useNavigate()
    function nav(id) {
        return (
            navigate(`/Movie/${id}`)
         );
    }

    

    return (
        <div className="border">
            <div className="Movie-div">
                {Data_Movie.map((item) => (
                    <div className="Movie-card" key={item.id}  onClick={()=>nav(item.id)}>
                        <div className="up-list">
                            <img src={item.posterURL} alt={item.title} className="img-list"/>
                        </div>
                        <div className="down-list">
                            <span className="title">{item.title}</span>
                        </div>

                    </div>
                ))}
            </div>

        </div>
    );
};

export default MovieListe;