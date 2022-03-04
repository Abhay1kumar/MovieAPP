import React, {useState, useEffect} from 'react';
import axios from 'axios'
import SingleContent from '../Content/SingleContent';
import './Trending.css'
import PaginationPage from './Pagination';



function Trending() {
    const [content, setContent] =useState([])
    const [page , setPage] = useState(1)
// console.log(process.env)




  useEffect(()=>{
    const fetchTrending = async () => {
      const { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`);
      setContent(data.results)
      // setNumberOfPages(data.total_pages)
      // console.log(data.results)
    }
    fetchTrending();
  },[page])
  return (
    <div>
      <span className="pageTitle">Tranding</span>
      <div className="trending">
        {
          content && content.map((item,index)=>{
            return  <SingleContent key={index}  id={item.id} 
            poster={item.poster_path} 
            title={item.title || item.name} 
            date={item.first_air_date || item.release_date}
            media_type={item.media_type}
            vote_average={item.vote_average}
            />
          })
        }
      </div>
   <PaginationPage  setPage={setPage}/>
    </div>
  )
}

export default Trending