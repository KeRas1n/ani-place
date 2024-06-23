import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAnime } from "../anime/anime.types";

const items = []
const initialState = {items:items}

export const watchlistSlice = createSlice({
    name:'watchlist',
    initialState,
    reducers: {
        addItem:(state, action:PayloadAction<IAnime>) => {
            state.items.push({...action.payload, watched:false})
        },
        removeItem:(state, action:PayloadAction<{mal_id:number}>) => {
            return {...state, items:state.items.filter(p => p.mal_id !== action.payload.mal_id)}
        },
        setWatchedItem:(state, action:PayloadAction<{mal_id:number}>) => {
            return {
                ...state,
                items: state.items.map(item =>
                  item.mal_id === action.payload.mal_id
                    ? { ...item, watched:!item.watched }
                    : item
                ),
              };
        },
    }

})


export const watchlistReducer = watchlistSlice.reducer
export const watchlistActions = watchlistSlice.actions