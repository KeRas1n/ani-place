import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAnime } from "../anime/anime.types";
import { store } from "../store";



const items = []
//const initialState = {items:items}

const initialState = localStorage.getItem('reduxState') 
    ? {items:JSON.parse(localStorage.getItem('reduxState'))}
    : {items:items}

export enum listTags{
    PLAN_TO_WATCH = "Plan",
    WATCHING = "Watching",
    COMPLETED = "Completed",
    DROPPED = "Dropped",
    ON_HOLD = "On Hold",
    FAVOURITE = "Favourite",
}

export const watchlistSlice = createSlice({
    name:'watchlist',
    initialState,
    reducers: {
        addItem:(state, action:PayloadAction<IAnime>) => {
            state.items.push({...action.payload, listTag:listTags.PLAN_TO_WATCH})
        },
        removeItem:(state, action:PayloadAction<{mal_id:number}>) => {
            return {...state, items:state.items.filter(p => p.mal_id !== action.payload.mal_id)}
        },
        setWatchedItem:(state, action:PayloadAction<{mal_id:number}>) => {
            return {
                ...state,
                items: state.items.map(item =>
                  item.mal_id === action.payload.mal_id
                    ? { ...item, listTag:listTags.COMPLETED}
                    : item
                ),
              };
        },
        changeListTag:(state, action:PayloadAction<{mal_id:number, newTag:string}>) => {
            return {
                ...state,
                items: state.items.map(item =>
                  item.mal_id === action.payload.mal_id
                    ? { ...item, listTag:action.payload.newTag}
                    : item
                ),
              };
        },
        
    }

})





export const watchlistReducer = watchlistSlice.reducer
export const watchlistActions = watchlistSlice.actions


