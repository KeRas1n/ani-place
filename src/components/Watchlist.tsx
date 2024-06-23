import { useState } from "react";
import { useTypedSelection } from "../hooks/useTypedSelection"
import { AnimeListItem } from "./AnimeListItem"
import { listTags } from "../store/watchlist/watchlist.slice";

export const Watchlist = () => {
    const {watchlist} = useTypedSelection(state => state);
    const [tag, setTag] = useState(listTags.PLAN_TO_WATCH)


  return (
    <div className="p-[2rem] rounded-lg text-lg top-36 right-0 bg-[#1c1c1c] wrapper mt-5">
        <h1 className="text-3xl">My Watchlist</h1>

        <div className="flex mt-2">
        
        <div className="h-full p-4 rounded-lg w-80 flex flex-col gap-2 bg-[#0a0a0a]">
          {Object.keys(listTags).map(key => (
            <button className={`${tag === listTags[key] ? 'bg-primary' : ' '}`} onClick={() => setTag(listTags[key])}>{listTags[key]}</button>
          ))}
        </div>

        <div className="grid mt-3">
            {
            watchlist.items.filter(p => p.listTag === tag).length ?
            watchlist.items.filter(p => p.listTag === tag).map((anime:any) => (
                <AnimeListItem id={anime.mal_id + '-watchlist'} anime = {anime}/>
            ))

          : 
          <span className="text-xl text-gray-500">List is empty</span>}
        </div>
        </div>
    </div>
  )
}