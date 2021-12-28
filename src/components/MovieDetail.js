function MovieDetail({background_image,medium_cover_image,rating,runtime,title,description_full,genres,torrents}){
  console.log(torrents)
    return <div>
    <img src={background_image} alt={title}/>
    <img src={medium_cover_image} alt={title} />
    <div>
      <span>평점:{rating}</span>
      <span>런타임:{runtime}</span>
    </div> 
    <h2>
        {title}
    </h2>
    <p>{description_full}</p>
    <div>
      <span>카테고리</span>
    <ul>
      {genres.map(g=>(
        <li key={g}>{g}</li>
      ))}
    </ul>
    </div>
    
    <div>
      <span>토렌트주소</span>
      <ul>
      {torrents.map((t,index)=>(
        <li key={index}>{t.url}</li>
      ))}
    </ul></div>
    </div>;
}

export default MovieDetail;