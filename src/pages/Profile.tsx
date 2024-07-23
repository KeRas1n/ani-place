import { Watchlist } from "../components/Watchlist"
import { useWatchlistSync } from "../hooks/useWatchlistSync";

export const Profile = () => {

  useWatchlistSync();
  return (
    <div className='wrapper root mt-4'>

      <h1 className="text-3xl">Profile</h1>
      <Watchlist/>
    </div>
  )
}
