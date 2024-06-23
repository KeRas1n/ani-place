import { useState } from "react";
import { IAnimeInfo } from "../store/anime/anime.types"
import { useActions } from "../hooks/useActions";
import { useTypedSelection } from "../hooks/useTypedSelection";
import { FaCheck, FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import { listTags } from "../store/watchlist/watchlist.slice";
import { WatchlistTagSelect } from "./WatchlistTagSelect";

export const AnimeListItem = (anime:any) => {
  const animeInfo:IAnimeInfo = anime.anime
  console.log(animeInfo)

  const {removeItem, setWatchedItem, changeListTag} = useActions();

  const {watchlist} = useTypedSelection(state => state)

  const isInWatchlist = watchlist.items.some(p => p.mal_id === animeInfo.mal_id)

  function removeItemFromList(event){
    event.stopPropagation();
    event.preventDefault();
    removeItem({mal_id:animeInfo.mal_id})
  }


  function changeItemListTag(newTag){
    
    changeListTag({mal_id:animeInfo.mal_id, newTag:newTag})
    
  }

  return (
    
    <div className="border-black h-20 flex justify-between items-center cursor-pointer border m-1 p-1 border-[#646cff]">
        <div className="flex">
          <Link to={`anime/${animeInfo.mal_id}`}>
            <img src={animeInfo.images.jpg.image_url} className="h-16"/>
            </Link>
            <span className={`text-xl p-3 ${animeInfo.listTag === 'completed' ? 'line-through': ' '}`}>{animeInfo.title} - {animeInfo.listTag}</span>
        </div>




        <div className="flex flex-col items-end gap-4">
        <WatchlistTagSelect test={animeInfo.title} onChange={(val) => changeItemListTag(val)} options = {listTags} currentTag = {animeInfo.listTag}/>
        <a onClick={(event) => removeItemFromList(event)} className="text-white hover:text-red-600"><FaRegTrashAlt /></a>
        </div>
        
    </div>
    
  )
}
