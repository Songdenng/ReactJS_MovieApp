import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
    const [loading, setLoading] = useState(true);
    const [movie, setMovies] = useState([]);
    const { id } = useParams();
    const getMovie = async () => {
        const json = await (
            await fetch(
                `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
            )
        ).json();
        console.log(json);
        setMovies(json.data.movie);
        setLoading(false);
    };
    useEffect(() => {
        getMovie();
    }, []);
    return (
        <div>
            {loading ? <h1>Loading...</h1> : (
                <div>
                    <img src={movie.medium_cover_image}/>
                    <h2>{movie.title_long}</h2>
                    <p>runtime : {movie.runtime} m</p>
                </div>
            )}
        </div>
    );
}
export default Detail;
