import { configureStore, Store } from "@reduxjs/toolkit";
import { animeapi } from "./anime/anime.api";
import { watchlistReducer } from "./watchlist/watchlist.slice";
import { animesingleapi } from "./anime/singleanime.api";
import { animesearchapi } from "./anime/animesearch.api";
import localStorageSync from "./middleware/localStorageSync";
import { pageReducer } from "./page/page.slice";



export const store:Store = configureStore({
    reducer:{[animeapi.reducerPath]: animeapi.reducer, 
        watchlist:watchlistReducer,
        page: pageReducer,
        [animesingleapi.reducerPath]: animesingleapi.reducer,
        [animesearchapi.reducerPath]: animesearchapi.reducer,

    },

    middleware: getDefaultMiddleware => getDefaultMiddleware().concat([
        animeapi.middleware, 
        animesingleapi.middleware, 
        animesearchapi.middleware,
        localStorageSync
    ]),
});


export type TypeRootState = ReturnType<typeof store.getState>