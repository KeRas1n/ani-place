import { useState, useMemo, useCallback } from "react";
import { useTypedSelection } from "../hooks/useTypedSelection";
import { AnimeListItem } from "./AnimeListItem";
import { listTags } from "../store/watchlist/watchlist.slice";

export const Watchlist = () => {
    const { watchlist } = useTypedSelection(state => state);
    const [tag, setTag] = useState(' ');

    const filteredItems = useMemo(() => {
        if (!Object.values(listTags).includes(tag)) {
            return watchlist.items;
        }
        return watchlist.items.filter((p:any) => p.listTag === tag);
    }, [watchlist.items, tag]);

    const handleTagChange = useCallback((selectedTag:any) => {
        setTag(selectedTag);
    }, []);

    return (
        <div className="rounded-lg text-lg top-36 bg-[#1c1c1c] wrapper mt-5">
            <h1 className="text-3xl">My Watchlist</h1>
            <div className="flex mobile:flex-col mt-2">
                <div className="h-full p-4 rounded-lg flex overflow-scroll mobile:flex-row flex-col gap-2 bg-[#0a0a0a]">
                    <button className={`${tag === ' ' ? 'bg-primary' : ''} p-2`} onClick={() => handleTagChange(' ')}>All</button>
                    {Object.keys(listTags).map((key:any) => (
                        <button key={key} className={`${tag === listTags[key] ? 'bg-primary' : ''} p-2`} onClick={() => handleTagChange(listTags[key])}>
                            {listTags[key]}
                        </button>
                    ))}
                </div>
                <div className="watchlist w-full flex flex-wrap h-full mt-3">
                    {filteredItems.length ? (
                        filteredItems.map((anime:any) => (
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
