import { useEffect, useState } from 'react'
import '../App.css'
import { AnimeCard } from '../components/AnimeCard'
import Header from '../components/Header'
import { Watchlist } from '../components/Watchlist'
import { useGetTopAnimeQuery } from '../store/anime/anime.api'
import { useInView } from 'react-intersection-observer'


function HomePage() {
  
  const [page, setPage] = useState(1);
  const {data, isLoading, error, isFetching} = useGetTopAnimeQuery({limit: 20, page: page})
  const{inView, ref} = useInView()
  const [anime, setAnime] = useState([]);
  console.log(data)

  const animeData = data?.data;

  useEffect(() => {
    if (inView && !isLoading) {
      console.log("Fetching more data...");
      setPage((prevPage) => prevPage + 1);
    }

    console.log(page)
  }, [inView, isLoading]);

  return (
    <>
      <Watchlist/>
      <div className='wrapper root mt-4'>
        <div className='text-left text-3xl'>Top Anime</div>

        {isLoading? 'LOADING...' : error ? <div className='text-red-600'>{error.data.status} {error.data.message}</div> : (

          <div className='flex flex-wrap justify-around mt-10 gap-y-3'>

            {animeData.map((anime:any) => (
              
              <AnimeCard key={anime.mal_id} anime = {anime}/>

            ))}


          </div>
        )}
        <div ref={ref}>LOAD MORE?</div>
        
        
        
      </div>
    </>
  )
}


export default HomePage
