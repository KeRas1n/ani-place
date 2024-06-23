import { listTags } from "../store/watchlist/watchlist.slice"

export const WatchlistTagSelect = ({options, currentTag, onChange}) => {

  return (
    <select
    className="bg-black p-2 cursor-pointer text-center" 
    defaultValue={currentTag}
    value={currentTag}
    onChange={(e) => onChange(e.target.value)}
    >
        {Object.keys(options).map(key => (
            <option value={options[key]}>{options[key]}</option>
        ))}
    </select>
  )
}
