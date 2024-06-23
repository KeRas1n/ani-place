import { listTags } from "../store/watchlist/watchlist.slice"

export const WatchlistTagSelect = ({options, currentTag, onChange, test}) => {

  return (
    <select id={test}
    className="bg-black p-2 cursor-pointer" 
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
