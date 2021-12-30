import propTypes from "prop-types";
import {Link} from "react-router-dom";
import styles from"./Movie.module.css";

function Movie({id,medium_cover_image,title,summary,genres}){
    return <div className={styles.movie}>
    <img className={styles.movie__img} src={medium_cover_image} alt={title} />
    <div>
    <h2 className={styles.movie__title}>
      <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
    <p>{summary.length>235? `${summary.slice(0,235)} ...`:summary }</p>
    <ul className={styles.movie__genres}>
      {genres.map(g=>(
        <li key={g}>{g}</li>
      ))}
    </ul>
    </div>
    </div>;
}
Movie.propTypes={
  id:propTypes.number.isRequired,
    medium_cover_image:propTypes.string.isRequired,
    title:propTypes.string.isRequired,
    summary:propTypes.string.isRequired,
    genres:propTypes.arrayOf(propTypes.string).isRequired,
}
export default Movie;