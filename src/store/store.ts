import { configureStore } from "@reduxjs/toolkit";
import { animeapi } from "./anime/anime.api";
import { watchlistReducer } from "./watchlist/watchlist.slice";
import { animesingleapi } from "./anime/singleanime.api";
import { animesearchapi } from "./anime/animesearch.api";




export const store = configureStore({
    reducer:{[animeapi.reducerPath]: animeapi.reducer, 
        watchlist:watchlistReducer, 
        [animesingleapi.reducerPath]: animesingleapi.reducer,
        [animesearchapi.reducerPath]: animesearchapi.reducer,

    },

    middleware: getDefaultMiddleware => getDefaultMiddleware().concat([
        animeapi.middleware, 
        animesingleapi.middleware, 
        animesearchapi.middleware,
    ]),
})


export type TypeRootState = ReturnType<typeof store.getState>