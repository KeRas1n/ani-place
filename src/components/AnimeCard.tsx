import { useState } from "react";
import { IAnime } from "../store/anime/anime.types"
import { useActions } from "../hooks/useActions";
import { useTypedSelection } from "../hooks/useTypedSelection";
import { Link } from "react-router-dom";

export const AnimeCard = ({ anime, index }:{anime:IAnime, index:number}) => {

  console.log(index)

  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(true);
  };
  const onLeave = () => {
    setHover(false);
  };

  const {addItem, removeItem} = useActions();
  const {watchlist} = useTypedSelection(state => state)
  const isInWatchlist = watchlist.items.some((p:IAnime) => p.mal_id === anime.mal_id)

  function AddToWatchlist(event:any){
    event.preventDefault();
    event.stopPropagation();
    
    !isInWatchlist ? addItem(anime) : removeItem(anime)
  }
  

  return (
    <div className="rounded-xl border-black text-center  h-[26rem] flex flex-col w-56 cursor-pointer">
          <Link to={`/catalog/anime/${anime.mal_id}`} className="text-white">
        <div className="rounded-xl h-80 p-0 relative" onMouseEnter={onHover} onMouseLeave={onLeave}>

          <div className="relative overflow-hidden inline-block rounded-xl  h-full w-full">
              <img src={anime.images.jpg.image_url} className={` ${hover ? 'scale-125 transition-[8000ms] blur-sm opacity-40' : 'blur-none'} rounded-xl h-full block`}/>
          </div>

          <div className={` ${hover ? 'opacity-100' : ' opacity-0'} absolute w-full h-full top-0 transition-all rounded-xl z-50`}>

            <div className="p-2 text-md text-white">
              {anime.synopsis?.slice(0, 200) + '...' }
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
        
        <div className={` ${hover ? 'blur-sm opacity-40' : 'blur-none'} absolute p-1 bg-green-500 rounded-tl-xl text-lg`}><span >{anime.score}</span></div>
        <span className="text-xl p-3">{anime.title}</span>
        
    </div>
  )
}


