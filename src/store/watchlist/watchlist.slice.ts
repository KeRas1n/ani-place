import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAnime } from "../anime/anime.types";

const initialState = []

export const watchlistSlice = createSlice({
    name:'watchlist',
    initialState,
    reducers: {
        addItem:(state, action:PayloadAction<IAnime>) => {
            state.push(action.payload)
        },
        removeItem:(state, action:PayloadAction<{mal_id:number}>) => {
            return state.filter(p => p.mal_id !== action.payload.mal_id)
        },
    }

})


export const watchlistReducer = watchlistSlice.reducer
export const watchlistActions = watchlistSlice.actions