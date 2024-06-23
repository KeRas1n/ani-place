import { Link, useParams } from "react-router-dom"
import { useGetSingleAnimeQuery } from "../store/anime/singleanime.api";
import { IoStar } from "react-icons/io5";
import { FaUsers } from "react-icons/fa6";
import { useActions } from "../hooks/useActions";
import { useTypedSelection } from "../hooks/useTypedSelection";

export const SingleAnime = () => {
  const {id} = useParams();

  const {data, isLoading, error} = useGetSingleAnimeQuery(id)
  const animeInfo = data?.data;

  console.log(data)
    
  const {addItem} = useActions();
  const {watchlist} = useTypedSelection(state => state)
  const isInWatchlist = watchlist.items.some(p => p.mal_id === animeInfo.mal_id)


  return (
    <div className="p-[2rem] wrapper mt-3">
      {isLoading
      ? 
      'LOADING' 
      :
      <>
      <div className="grid anime-grid gap-3 w-full">
      <div className="flex flex-col justify-center">
          <img src={animeInfo.images.jpg.image_url} className="rounded-lg" width='500px'/>
          <button onClick={() => !isInWatchlist && addItem(animeInfo)} className="mt-5 p-2 hover:bg-primary">{isInWatchlist? 
          'Added To Watchlist' 
          :
          'Add to Watchlist'
          }</button>

          <div className="bg-[#1c1c1c] p-6 mt-3 rounded-lg">
            <div className="flex flex-col justify-center">
              <span className="text-sm text-gray-300">Type</span>
              <span className="text-xl">{animeInfo.type}</span>
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-sm text-gray-300">Release</span>
              <span className="text-xl">{animeInfo.aired.from.slice(0, 10)}</span>
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-sm text-gray-300">Episodes</span>
              <span className="text-xl">{animeInfo.episodes} <span className="text-sm text-gray-300">({animeInfo.duration})</span></span>
            </div>

            <div className="flex flex-col justify-center">
              <span className="text-sm text-gray-300">Status</span>
              <span className="text-xl">{animeInfo.status}</span>
            </div>

            <div className="flex flex-col justify-center">
              <span className="text-sm text-gray-300">Studios</span>
              <span className="text-xl flex gap-2">{animeInfo.studios.map((studio) => (
                
                <span>{studio.name}</span>
                
                ))}</span>
            </div>
            
          </div>
          
        </div>
        
        <div className="bg-[#1c1c1c] p-5 rounded-lg flex flex-col">
          
          <div className="text-3xl flex justify-between">
            <div className="flex flex-col"><span className="text-3xl">{animeInfo.title}</span>
            <span className="text-lg text-gray-300">{animeInfo.title_english}</span></div>
            <div className="flex flex-col justify-center items-center">
              <span className="flex items-center">{animeInfo.score} <span className="text-[#ffb657]"> <IoStar /></span></span>
              
              <span className="text-sm text-gray-300 flex items-center justify-center">{animeInfo.scored_by}<FaUsers /></span>
            </div>
          </div>

          <div className="mt-8 text-lg">
          {animeInfo.synopsis}
          </div>

          <div className="mt-8 flex">
            {animeInfo.genres.map((genre) => (
              <div className="ml-2 p-2 border border-primary rounded-lg">{genre.name}</div>
            ))}
          </div>

          <div className="flex justify-center mt-6">
          <iframe width="560" height="315" src={animeInfo.trailer.embed_url} frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          
          </div>

        </div>

        
      </div>
    
    </>
    }
    </div>
  )
}



