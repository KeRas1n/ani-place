import { useEffect, useState } from 'react'
import '../App.css'
import { AnimeCard } from '../components/AnimeCard'

import { animeapi, useGetTopAnimeQuery } from '../store/anime/anime.api'
import { useInView } from 'react-intersection-observer'
import { useDispatch } from 'react-redux'



function TopAnimePage() {

  //reset cache of top anime
  useEffect(() => {
    console.log("EFFECT")
    dispatch(animeapi.util.resetApiState());
  }, []);
  

  const [page, setPage] = useState(1);
  console.log(page)
  const {data, isLoading, error} = useGetTopAnimeQuery({limit: 20, page: page})
  const{inView, ref} = useInView()

  const dispatch = useDispatch()

  console.log(data)

  const animeData = data?.data;

  useEffect(() => {
    if (inView && !isLoading) {
      setPage((prevPage) => prevPage + 1);
    }

    console.log(page)
  }, [inView, isLoading]);

  

  return (
    <>
      <div className='wrapper root mt-4'>
        <div className='text-left text-3xl'>Top Anime</div>

        {isLoading? 'LOADING...' : error ? <div className='text-red-600'>{error.data.status} {error.data.message}</div> : (

          <div className='flex flex-wrap justify-around mt-10 gap-y-3'>

            {animeData.map((anime, index ) => (
              
              <AnimeCard key={anime.mal_id} anime = {anime}/>

            ))}


          </div>
        )}
        <div ref={ref}>LOAD MORE?</div>
        
        
        
      </div>
    </>
  )
}


export default TopAnimePage
