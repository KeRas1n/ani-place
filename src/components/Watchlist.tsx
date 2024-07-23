import { useState, useMemo, useCallback, useEffect } from "react";
import { useTypedSelection } from "../hooks/useTypedSelection";
import { AnimeListItem } from "./AnimeListItem";
import { listTags } from "../store/watchlist/watchlist.slice";
import { store } from "../store/store";
import { useWatchlistSync } from "../hooks/useWatchlistSync";

export const Watchlist = () => {
    const { watchlist } = useTypedSelection(state => state);
    const [tag, setTag] = useState('ALL');

    //useWatchlistSync();

    const filteredItems = useMemo(() => {
        if (tag === 'ALL') {
            return watchlist.items;
        }
        return watchlist.items.filter((p) => p.listTag === tag);
    }, [watchlist.items, tag]);

    const handleTagChange = useCallback((selectedTag:listTags) => {
        setTag(selectedTag);
    }, []);

    return (
        <div className="rounded-lg text-lg top-36 bg-[#1c1c1c] wrapper mt-5">
            <h1 className="text-3xl">My Watchlist</h1>
            <div className="flex mobile:flex-col mt-2">
                <div className="h-full p-4 rounded-lg flex flex-wrap mobile:flex-row flex-col gap-2 bg-[#0a0a0a]">
                    <button className={`${tag === 'ALL' ? 'bg-primary' : ''} p-2`} onClick={() => handleTagChange('ALL')}>All</button>
                    {Object.keys(listTags).map((key) => (
                        <button key={key} className={`${tag === listTags[key] ? 'bg-primary' : ''} p-2`} onClick={() => handleTagChange(listTags[key])}>
                            {listTags[key]}
                        </button>
                    ))}
                </div>
                <div className="watchlist flex flex-wrap mt-3">
                    {filteredItems.length ? (
                        filteredItems.map((anime) => (
                            <AnimeListItem key={anime.mal_id + '-watchlist'} id={anime.mal_id + '-watchlist'} anime={anime} />
                        ))
                    ) : (
                        <span className="text-xl text-gray-500">List is empty</span>
                    )}
                </div>
            </div>
        </div>
    );
};
