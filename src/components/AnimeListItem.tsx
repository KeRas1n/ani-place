import { useState } from "react";
import { IAnimeInfo } from "../store/anime/anime.types"
import { useActions } from "../hooks/useActions";
import { useTypedSelection } from "../hooks/useTypedSelection";
import { FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export const AnimeListItem = (anime:any) => {
  const animeInfo:IAnimeInfo = anime.anime

  const {removeItem} = useActions();

  const {watchlist} = useTypedSelection(state => state)

  //const isInWatchlist = watchlist.some(p => p.mal_id === animeInfo.mal_id)

  function removeItemFromList(event){
    event.stopPropagation();
    event.preventDefault();
    removeItem({mal_id:animeInfo.mal_id})
  }

  return (
    <Link to={`anime/${animeInfo.mal_id}`}>
    <div className="border-black h-20 flex justify-between items-center cursor-pointer border m-1 p-1 border-[#646cff]">
        <div className="flex">
            <img src={animeInfo.images.jpg.image_url} className="h-16"/>
            <span className="text-xl p-3">{animeInfo.title}</span>
        </div>

        <a onClick={(event) => removeItemFromList(event)} className="hover:text-red-600"><FaRegTrashAlt /></a>
        
    </div>
    </Link>
  )
}
