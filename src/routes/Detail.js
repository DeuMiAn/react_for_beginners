import {useParams} from "react-router-dom";
import { useEffect, useState, useCallback } from "react";
import MovieDetail from "../components/MovieDetail";
import styles from "./Detail.module.css";

function Detail(){
    const [loading, setLoading]=useState(true);
    const [movieData, setMovieData]=useState({});
    const {id}=useParams();
    const getMovieDetail=useCallback(async()=>{
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json()
            setMovieData(json.data.movie)
            setLoading(false)
            console.log(json.data.movie)
    },[id]);
    useEffect(()=>{
        getMovieDetail()
    }, [getMovieDetail]);
    return(
        <div>
            {
            loading? <h1 className={styles.detail__loading }>...loading</h1>
            :<div className={styles.detail}>
                <MovieDetail 
                id={movieData.id}
                background_image={movieData.background_image}
                medium_cover_image={movieData.medium_cover_image}
                title={movieData.title_long}
                description_full={movieData.description_full}
                genres={movieData.genres}
                rating={movieData.rating}
                runtime={movieData.runtime}
                torrents={movieData.torrents}
                /> 
            </div>
            }
        </div> 
    );
}

export default Detail;