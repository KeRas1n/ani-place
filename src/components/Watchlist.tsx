import { useTypedSelection } from "../hooks/useTypedSelection"
import { AnimeListItem } from "./AnimeListItem"

export const Watchlist = () => {
    const {watchlist} = useTypedSelection(state => state);


  return (
    <div className="p-[2rem] rounded-lg text-lg top-36 right-0 bg-[#1c1c1c] wrapper mt-5">
        <h1 className="text-3xl">My Watchlist</h1>

        <div className="grid mt-3">
            {watchlist.length ?

            

            watchlist.map((anime:any) => (
                <AnimeListItem anime = {anime}/>
            ))

         : 
        <span className="text-xl text-gray-500">Your watchlist is empty</span>}
        </div>
    </div>
  )
}
