import { useEffect, useState } from 'react'
import '../App.css'
import { AnimeCard } from '../components/AnimeCard'
import { useInView } from 'react-intersection-observer'
import { animesearchapi, useGetAnimeSearchQuery } from '../store/anime/animesearch.api'
import { useSearchParams  } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { SearchBarCatalog } from '../components/SearchBarCatalog'
import { PropertiesSidebar } from '../components/PropertiesSidebar'

/*
interface SearchParamsProp{
  q:string,
  order_by:string
}*/


function SearchPage() {

  const dispatch = useDispatch()
    
  let [searchParams, setSearchParams] = useSearchParams();
  
  const [page, setPage] = useState(1);



  //reset cache of top anime
  useEffect(() => {
    console.log("EFFECT")
    dispatch(animesearchapi.util.resetApiState());
    setPage(1);
  }, [searchParams]);


  
  const {data, isLoading, error} = useGetAnimeSearchQuery({query:searchParams, limit:50, page:page});

  const{inView, ref} = useInView()

  //const dispatch = useDispatch()

  
  const animeData = data?.data;
  
  console.log(searchParams)


  useEffect(() => {
    if (inView && !isLoading) {
      setPage((prevPage) => prevPage + 1);
    }

    console.log(page)
  }, [inView, isLoading]);


  const Search = (value:string) => {
    dispatch(animesearchapi.util.resetApiState());
    setPage(1);
    setSearchParams({q:value})
  }

  const Order = (value:string) => {
    dispatch(animesearchapi.util.resetApiState());
    setPage(1);

    //setSearchParams(createSearchParams({q:searchParams.get('q')?.toString(), order_by:value}))
    setSearchParams(new URLSearchParams([['q', `${searchParams.get('q')? searchParams.get('q') : ''}` ],
    ['order_by', value]]))
  }




  useEffect(() => {
    if (error) {
      if ("data" in error) {
      const errorData = error as any;
      console.log(errorData.data.message)
      }
    }
    }, [error]);


  return (
    <>
    <div className='flex justify-center gap-0'>
      <div className='searchWrapper root mt-4'>
        <div className='flex mobile:flex-col justify-between'>
        <div className='text-left text-3xl'>Search of Anime</div>
        
        <SearchBarCatalog params={searchParams} onChangeOrder={(value:string) => Order(value)} OnSearch = {(value:string) => Search(value)}/>


        </div>


        {isLoading? 'LOADING...' : error ? <div className='text-red-600'>{'data' in error ? (error as any).data.status + ' ' + (error as any).data.message : ' '}</div> : (

          <div className='flex flex-wrap justify-around mt-10 gap-y-3 anime-list'>

            {animeData?.map((anime ) => (
              
              <AnimeCard index={anime.mal_id} key={anime.mal_id} anime = {anime}/>

            ))}


          </div>
        )}
        <div ref={ref}>LOAD MORE?</div>
        
        
        
      </div>
        <PropertiesSidebar/>
      </div>
    </>
  )
}


export default SearchPage
