import { useState } from "react";
import { IAnimeInfo } from "../store/anime/anime.types"
import { useActions } from "../hooks/useActions";
import { useTypedSelection } from "../hooks/useTypedSelection";
import { FaCheck, FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";

export const AnimeListItem = (anime:any) => {
  const animeInfo:IAnimeInfo = anime.anime
  console.log(animeInfo)

  const {removeItem, setWatchedItem} = useActions();

  const {watchlist} = useTypedSelection(state => state)

  const isInWatchlist = watchlist.items.some(p => p.mal_id === animeInfo.mal_id)

  function removeItemFromList(event){
    event.stopPropagation();
    event.preventDefault();
    removeItem({mal_id:animeInfo.mal_id})
  }



  function markItemAsWatched(event){
    event.stopPropagation();
    event.preventDefault();

    setWatchedItem({mal_id:animeInfo.mal_id})
    
  }

  return (
    <Link to={`anime/${animeInfo.mal_id}`}>
    <div className="border-black h-20 flex justify-between items-center cursor-pointer border m-1 p-1 border-[#646cff]">
        <div className="flex">
            <img src={animeInfo.images.jpg.image_url} className="h-16"/>
            <span className={`text-xl p-3 ${animeInfo.watched ? 'line-through': ' '}`}>{animeInfo.title}</span>
        </div>

        <div className="flex gap-4">
        <a onClick={(event) => markItemAsWatched(event)} className="text-white hover:text-green-600">{animeInfo.watched ? <AiOutlineClose className="hover:text-red-600"/>: <FaCheck className="hover:text-green-600"/>}</a>
        <a onClick={(event) => removeItemFromList(event)} className="text-white hover:text-red-600"><FaRegTrashAlt /></a>
        </div>
        
    </div>
    </Link>
  )
}
