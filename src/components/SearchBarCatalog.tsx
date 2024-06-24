import { useState } from "react"
import { WatchlistTagSelect } from "./WatchlistTagSelect";



export enum OrderByTag{
  scored_by = 'scored_by',
  popularity = 'popularity',
  episodes = 'episodes',
  rank = 'rank',
}


//{q:value}
export const SearchBarCatalog = ({OnSearch, params, onChangeOrder}) => {

  const[val, setVal] = useState(params.get('q'));
  
  return (
    <div className="flex flex-col gap-3">
        <div>
          <input value={val} onChange={(e) => setVal(e.target.value)} className=" text-lg p-1 pl-2 pr-2 bg-black border-none rounded-lg" placeholder="Search..."></input>
          <button className="pl-2 pr-2 p-1 hover:bg-primary transition-all" onClick={() => OnSearch(val)}>Search</button>
        </div>
        <WatchlistTagSelect options={OrderByTag} currentTag={params.get('order_by')} onChange={(val:OrderByTag) => onChangeOrder(val)}/>
        
        {/*<WatchlistTagSelect onChange={(val:listTags) => changeItemListTag(val)} options = {listTags} currentTag = {watchlist.items.find(p => p.mal_id === animeInfo.mal_id)?.listTag}/>*/}

    </div>
  )
}
