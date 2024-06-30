import { IAnimeInfo } from "../store/anime/anime.types"
import { useActions } from "../hooks/useActions";
import { FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { listTags } from "../store/watchlist/watchlist.slice";
import { WatchlistTagSelect } from "./WatchlistTagSelect";

export const AnimeListItem = (anime:any) => {
  const animeInfo:IAnimeInfo = anime.anime
  console.log(animeInfo)

  const {removeItem, changeListTag} = useActions();


  function removeItemFromList(event:any){
    event.stopPropagation();
    event.preventDefault();
    removeItem({mal_id:animeInfo.mal_id})
  }


  function changeItemListTag(newTag:listTags){
    
    changeListTag({mal_id:animeInfo.mal_id, newTag:newTag})
    
  }

  return (
    
    <div className="border-black h-20 flex justify-between items-center cursor-pointer border m-1 p-1 border-[#646cff]">
        <div className="flex">
          <Link to={`/catalog/anime/${animeInfo.mal_id}`}>
            <img src={animeInfo.images.jpg.image_url} className="h-16"/>
            </Link>
            <span className={`text-xl p-3 ${animeInfo.listTag === listTags.COMPLETED ? 'line-through': ' '}`}>{animeInfo.title}</span>
        </div>




        <div className="flex flex-col items-end gap-4">
        <WatchlistTagSelect onChange={(val:listTags) => changeItemListTag(val)} options = {listTags} currentTag = {animeInfo.listTag}/>
        <a onClick={(event) => removeItemFromList(event)} className="text-white hover:text-red-600"><FaRegTrashAlt /></a>
        </div>
        
    </div>
    
  )
}
