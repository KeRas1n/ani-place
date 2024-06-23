import { useState } from "react";
import { useTypedSelection } from "../hooks/useTypedSelection"
import { AnimeListItem } from "./AnimeListItem"
import { listTags } from "../store/watchlist/watchlist.slice";
import { store } from "../store/store";

export const Watchlist = () => {
    const {watchlist} = useTypedSelection(state => state);
    const [tag, setTag] = useState('ALL')



    store.subscribe(()=>{
    localStorage.setItem('reduxState', JSON.stringify(watchlist.items));
})

console.log( JSON.stringify(watchlist.items))
  return (
    <div className="p-[2rem] rounded-lg text-lg top-36 right-0 bg-[#1c1c1c] wrapper mt-5">
        <h1 className="text-3xl">My Watchlist</h1>

        <div className="flex mt-2">
        
        <div className="h-full p-4 rounded-lg flex flex-col gap-2 bg-[#0a0a0a]">
          <button className={`${tag === 'ALL' ? 'bg-primary' : ' '} p-2`} onClick={() => setTag('ALL')}>All</button>
          {Object.keys(listTags).map(key => (
            <button className={`${tag === listTags[key] ? 'bg-primary' : ' '} p-2`} onClick={() => setTag(listTags[key])}>{listTags[key]}</button>
          ))}
        </div>

        <div className="grid mt-3">
            {

            Object.values(listTags).includes(tag)
            ?
            watchlist.items.filter(p => p.listTag === tag).length ?
            watchlist.items.filter(p => p.listTag === tag).map((anime:any) => (
                <AnimeListItem id={anime.mal_id + '-watchlist'} anime = {anime}/>
            ))

            : 
            <span className="text-xl text-gray-500">List is empty</span>
          : 
          watchlist.items.map((anime:any) => (
            <AnimeListItem id={anime.mal_id + '-watchlist'} anime = {anime}/>
        ))
        }
        </div>
        </div>
    </div>
  )
}
