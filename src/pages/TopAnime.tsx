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
  
  //const [page, setPage] = useState(sessionStorage.getItem('page')? Number(sessionStorage.getItem('page')) : 1);
  const [page, setPage] = useState(1);

  console.log(page)
  const {data, isLoading, error} = useGetTopAnimeQuery({query:null, limit: 20, page: page})
  const{inView, ref} = useInView()

  const dispatch = useDispatch()

  console.log(data)

  const animeData = data?.data;

  useEffect(() => {
    if (inView && !isLoading) {
      setPage((prevPage) => prevPage + 1);
    }
    
  }, [inView, isLoading]);


  return (
    <>
      <div className='wrapper root mt-4'>
        <div className='text-left text-3xl'>Top Anime</div>

        {isLoading? 'LOADING...' : error ? <div className='text-red-600'>{'data' in error ? (error as any).data.status + ' ' + (error as any).data.message : ' '}</div> : (

          <div className='flex flex-wrap justify-around mt-10 gap-y-3 anime-list'>

            {animeData?.map((anime) => (
              
              <AnimeCard index={anime.mal_id} key={anime.mal_id} anime = {anime}/>

            ))}


          </div>
        )}
        <div ref={ref}></div>
        
        
        
      </div>
    </>
  )
}


export default TopAnimePage
