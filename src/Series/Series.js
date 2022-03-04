import React,{useEffect,useState} from 'react'
import axios from 'axios'
import PaginationPage from '../Trending/Pagination'
import SingleContent from '../Content/SingleContent';
import Genres from '../Movies/Genres';
import useGenres from '../hooks/useGenre';

function Series() {

  const [page,setPage]= useState(1);
  const [content, setContent] = useState([]);
  const [genres, setGenres] = useState([]);
   const [selectedGenres, setSelectedGenres] = useState([]);
   const genresforURL = useGenres(selectedGenres)
  
 
   
   useEffect(() => {
     const fetchMovies = async () => {
       const {data} = await axios.get(` https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genresforURL}`
       );
       setContent(data.results)
     // console.log(data.results)
     }
     fetchMovies();
   },[page,genresforURL])


  return (
    <div>
          <span className="pageTitle">Series</span>
          <Genres
        type="tv"
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        genres={genres}
        setGenres={setGenres}
        setPage={setPage}
      />

          <div className="trending">
        {
          content && content.map((item,index)=>{
            return  <SingleContent key={index}  id={item.id} 
            poster={item.poster_path} 
            title={item.title || item.name} 
            date={item.first_air_date || item.release_date}
            media_type='tv'
            vote_average={item.vote_average}
            />
          })
        }
      </div>
          <PaginationPage  setPage={setPage}/>
    </div>
  )
}

export default Series