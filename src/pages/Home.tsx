import { useEffect } from 'react'
import '../App.css'
import { AnimeCard } from '../components/AnimeCard'
import {  useGetTopAnimeQuery } from '../store/anime/anime.api'
import { useInView } from 'react-intersection-observer'
import { useDispatch, useSelector } from 'react-redux'
import { TypeRootState } from '../store/store';
import { pageActions } from '../store/page/page.slice'


function HomePage() {
  const dispatch = useDispatch()

  const {nextPage} = pageActions;

  //const [page, setPage] = useState(1);

  const page = useSelector((state: TypeRootState) => state.page.pages.context1);

  //const [skipQuery, setSkipQuery] = useState(false);

  // Решение проблемы с повторным вызовом
 /* useEffect(() => {
    if (page === 6) {
      setSkipQuery(true);  // Отключаем skip для следующих вызовов
    }
  }, [page]);*/

  const {data, isLoading, error} = useGetTopAnimeQuery({query: null, limit: 20, page: page})
  
  const{inView, ref} = useInView()

  console.log(data)

  const animeData = data?.data;


  useEffect(() => {
    if (inView && !isLoading) {
      //setPage((prevPage) => prevPage + 1);
      dispatch(nextPage({ context: 'context1' }));
    }

    console.log(page)
  }, [inView, isLoading]);


  return (
    <>
      <div className='wrapper root mt-4'>
        <div className='text-left text-3xl'>Catalog of Anime</div>

        {isLoading? 'LOADING...' : error ? <div className='text-red-600'>{'data' in error ? (error as any).data.status + ' ' + (error as any).data.message : ' '}</div> : (

          <div className='flex flex-wrap justify-around mt-10 gap-y-3 anime-list'>

            {animeData?.map((anime ) => (
              
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
