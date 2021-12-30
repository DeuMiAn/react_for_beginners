import { useEffect, useState, useCallback } from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css"

function Home(){
    const[loading, setLoading]=useState(true);
  const [movies, setMovies]=useState([]);
  const [pageNum,setPageNum]=useState(1);
  
  const onClickPre=()=>{
    setPageNum(prev=>prev+1)
    setLoading(true);
    
  }
  const BtnBox=()=>{
    return(
  <div className={styles.home__btnBox}>
          <button className={styles.home__btn} onClick={onClickBack}>이전</button>
          <span className={styles.home__pagenum}>페이지 {pageNum}</span>
          <button className={styles.home__btn} onClick={onClickPre}>다음</button>
      </div>)
  }
  const onClickBack=()=>{
    if(pageNum<=1){
      return
    }
    setLoading(true);
    setPageNum(prev=>prev-1)
  }
  // const getMovies=async()=>{
  //   const response=await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year'
  //   )
  //   const json = await response.json();
  //   setMovies(json.data.movies);
  //   setLoading(false);
  // };
  const getMovies=useCallback(async()=>{
    console.log(pageNum)
  const json=await(
    await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=7&sort_by=year&page=${pageNum}`
    )
  ).json();
  setMovies(json.data.movies);
  setLoading(false);
  },[pageNum])
  useEffect(()=>{
    getMovies();
  },[getMovies,pageNum]);
  return ( 
  <div>
    {loading ? <h1 className={styles.home__loading}>Loading...</h1> 
    : <div className={styles.home}>
      <h1 className={styles.home__title}>DeuMiAn Movies</h1>
      <BtnBox />
      {movies.map(movie=> 
      <Movie 
      key={movie.id}
      id={movie.id}
      medium_cover_image={movie.medium_cover_image} 
      title={movie.title} 
      summary={movie.summary} 
      genres={movie.genres}/>
        )}
        <BtnBox />
        </div>
        }
        
  </div>
  );
}
export default Home;