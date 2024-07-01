import { useState } from "react";
import { useTypedSelection } from "../hooks/useTypedSelection"
import { AnimeListItem } from "./AnimeListItem"
import { listTags } from "../store/watchlist/watchlist.slice";
import { store } from "../store/store";

export const Watchlist = () => {
    const {watchlist} = useTypedSelection(state => state);
    const [tag, setTag] = useState('ALL')

    store.subscribe(()=>{
    const state = store.getState();
    localStorage.setItem('reduxState', JSON.stringify(state.watchlist.items));
})

console.log( JSON.stringify(watchlist.items))
  return (
    <div className="rounded-lg text-lg top-36 bg-[#1c1c1c] wrapper mt-5">
        <h1 className="text-3xl">My Watchlist</h1>

        <div className="flex mobile:flex-col mt-2">
        
        <div className="h-full p-4 rounded-lg flex flex-wrap mobile:flex-row flex-col gap-2 bg-[#0a0a0a]">
          <button className={`${tag === 'ALL' ? 'bg-primary' : ' '} p-2`} onClick={() => setTag('ALL')}>All</button>
          {Object.keys(listTags).map((key:any) => (
            <button className={`${tag === listTags[key] ? 'bg-primary' : ' '} p-2`} onClick={() => setTag(listTags[key])}>{listTags[key]}</button>
          ))}
        </div>

        <div className="watchlist flex flex-wrap mt-3">
            {

            Object.values(listTags).includes(tag)
            ?
            watchlist.items.filter((p:any) => p.listTag === tag).length ?
            watchlist.items.filter((p:any) => p.listTag === tag).map((anime:any) => (
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
