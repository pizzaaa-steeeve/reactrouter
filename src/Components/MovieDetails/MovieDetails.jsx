import {useNavigate, useParams} from "react-router";
import Data_Movie from "../../Data/Data_Movie";

const MovieDetails = () => {
    const navigate =useNavigate()
    const params =useParams()
    const id = params.id
    const Movie =Data_Movie[id-1]
    return (
        <div className="Details">
            <div className="left">
                <iframe title={Movie.youtubetitile} src={Movie.youtubesrc} className="fram"></iframe>


            </div>

            <div className="right">
                <div className="titre-details">{Movie.title}</div>
                <div>{Movie.des}</div>
                <div>Duree: {Movie.duration}</div>
                <ul className="actor-list">
                    Acteur :
                {Movie.actors.map((actor)=>(

                        <li>{actor}</li>
                ))}
                </ul>
                <button onClick={()=>navigate(-1)}>Back</button>
            </div>
        </div>
    );
};

export default MovieDetails;