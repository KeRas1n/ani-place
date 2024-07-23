import { useEffect } from "react";
import { store } from "../store/store";

export const useWatchlistSync = () => {
    useEffect(() => {
        const unsubscribe = store.subscribe(() => {
            const state = store.getState();
            localStorage.setItem('reduxState', JSON.stringify(state.watchlist.items));
        });
        return () => unsubscribe();
    }, []);
};
