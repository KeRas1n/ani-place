export const WatchlistTagSelect = ({options, currentTag, onChange}:{options:any, currentTag:any, onChange:any}) => {

  return (
    <select
    className="bg-black p-2 cursor-pointer text-center" 
    defaultValue={currentTag}
    value={currentTag}
    onChange={(e) => onChange(e.target.value)}
    >
        {Object.keys(options).map((key:any) => (
            <option value={options[key]}>{options[key]}</option>
        ))}
    </select>
  )
}
