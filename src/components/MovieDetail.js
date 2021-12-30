import styles from "./MovieDetail.module.css";


function MovieDetail({background_image,medium_cover_image,rating,runtime,title,description_full,genres,torrents}){
    return <div className={styles.MovieDetail}>
    <div className={styles.MovieDetail__imgBox}>
    <img className={styles.MovieDetail__Background__img} src={background_image} alt={title}/>
    <img className={styles.MovieDetail__cover__img } src={medium_cover_image} alt={title} />
    </div>
    <h2 className={styles.MovieDetail__title}>
        {title}
    </h2>
    <div className={styles.MovieDetail__rr__box}>
      <span className={styles.MovieDetail__r__text}>평점:{rating}</span>
      <span className={styles.MovieDetail__r__text}>런타임:{runtime}</span>
    </div> 
    <p className={styles.MovieDetail__text}>{description_full}</p>
    <div>
    <ul className={styles.MovieDetail__genres }>
      {genres.map(g=>(
        <li key={g}>{g}</li>
      ))}
    </ul>
    </div>
    
    <div className={styles.MovieDetail__torrentBox}>
      <span className={styles.MovieDetail__title}>토렌트주소</span>
      <ul className={styles.MovieDetail__genres }>
      {torrents.map((t,index)=>(
        <li key={index}>{t.url}</li>
      ))}
    </ul></div>
    </div>;
}

export default MovieDetail;