import { useEffect, useState } from 'react'
import '../App.css'
import { AnimeCard } from '../components/AnimeCard'
import { useGetTopAnimeQuery } from '../store/anime/anime.api'
import { useInView } from 'react-intersection-observer'


function HomePage() {

  const [page, setPage] = useState(1);

  const {data, isLoading, error} = useGetTopAnimeQuery({query: null, limit: 20, page: page})

  const{inView, ref} = useInView()

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
        <div className='text-left text-3xl'>Catalog of Anime</div>

        {isLoading? 'LOADING...' : error ? <div className='text-red-600'>{'data' in error ? (error as any).data.status + ' ' + (error as any).data.message : ' '}</div> : (

          <div className='flex flex-wrap justify-around mt-10 gap-y-3'>

            {animeData?.map((anime, index ) => (
              
              <AnimeCard index={anime.mal_id} key={anime.mal_id} anime = {anime}/>

            ))}


          </div>
        )}
        <div ref={ref}>LOAD MORE?</div>
        
        
        
      </div>
    </>
  )
}


export default HomePage
