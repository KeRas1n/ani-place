import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAnime } from "../anime/anime.types";



const items:any = []
//const initialState = {items:items}

const initialState = localStorage.getItem('reduxState') 
    ? {items:JSON.parse(localStorage.getItem('reduxState') || '{}')}
    : {items:items}


export enum listTags{
    PLAN_TO_WATCH = "Plan"as any,
    WATCHING = "Watching"as any,
    COMPLETED = "Completed"as any,
    DROPPED = "Dropped"as any,
    ON_HOLD = "On Hold"as any,
    FAVOURITE = "Favourite"as any,
}

export const watchlistSlice = createSlice({
    name:'watchlist',
    initialState,
    reducers: {
        setWatchlist:(state, action:PayloadAction<IAnime>) => {
            state.items = action.payload
        },
        addItem:(state, action:PayloadAction<IAnime>) => {
            state.items.push({...action.payload, listTag:listTags.PLAN_TO_WATCH})
        },
        removeItem:(state, action:PayloadAction<{mal_id:number}>) => {
            return {...state, items:state.items.filter((p:any) => p.mal_id !== action.payload.mal_id)}
        },
        changeListTag:(state, action:PayloadAction<{mal_id:number, newTag:any}>) => {
            return {
                ...state,
                items: state.items.map((item:any) =>
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


