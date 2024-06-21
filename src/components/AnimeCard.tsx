import { useState } from "react";
import { IAnimeInfo } from "../store/anime/anime.types"
import { useActions } from "../hooks/useActions";
import { useTypedSelection } from "../hooks/useTypedSelection";
import { Link } from "react-router-dom";

export const AnimeCard = (anime:any) => {
  const animeInfo:IAnimeInfo = anime.anime

  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(true);
  };
  const onLeave = () => {
    setHover(false);
  };

  const {addItem} = useActions();

  const {watchlist} = useTypedSelection(state => state)

  const isInWatchlist = watchlist.some(p => p.mal_id === animeInfo.mal_id)

  function AddToWatchlist(event){
    event.preventDefault();
    event.stopPropagation();
    
    !isInWatchlist && addItem(animeInfo)
  }
  

  return (
    <div className="rounded-xl border-black text-center  h-[26rem] flex flex-col w-56 cursor-pointer">
          <Link to={`anime/${animeInfo.mal_id}`} className="text-white">
        <div className="rounded-xl h-80 p-0 relative" onMouseEnter={onHover} onMouseLeave={onLeave}>
          <img src={animeInfo.images.jpg.image_url} className={` ${hover ? 'blur-sm opacity-40' : 'blur-none'} rounded-xl h-full absolute`}/>
          
          <div className={` ${hover ? 'opacity-100' : ' opacity-0'} absolute w-full h-full  transition-all rounded-xl z-50`}>

            <div className="p-2 text-md text-white">
              {animeInfo.synopsis.slice(0, 200) + '...'}
            </div>

          
          <button 
          onClick={(event) => {AddToWatchlist(event)}}

          className="text-white absolute w-full left-0 bottom-0 hover:bg-[#646cff] p-1">
          {isInWatchlist? 
          'Added To Watchlist' 
          :
          'Add to Watchlist'
          }
          </button>
      

          </div>
          
        </div>
        </Link>
        
        <div className={` ${hover ? 'blur-sm opacity-40' : 'blur-none'} absolute p-1 bg-green-500 rounded-tl-xl text-lg`}><span >{animeInfo.score}</span></div>
        <span className="text-xl p-3">{animeInfo.title}</span>
        
    </div>
  )
}


