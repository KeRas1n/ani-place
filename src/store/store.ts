import { Store, configureStore } from "@reduxjs/toolkit";
import { animeapi } from "./anime/anime.api";
import { watchlistReducer } from "./watchlist/watchlist.slice";
import { animesingleapi } from "./anime/singleanime.api";




export const store = configureStore({
    reducer:{[animeapi.reducerPath]: animeapi.reducer, watchlist:watchlistReducer, [animesingleapi.reducerPath]: animesingleapi.reducer,},
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat([animeapi.middleware, animesingleapi.middleware]),
})


export type TypeRootState = ReturnType<typeof store.getState>