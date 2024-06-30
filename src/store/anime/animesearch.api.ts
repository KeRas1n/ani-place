import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IAnime } from "./anime.types";

export interface AnimeSearchArgs {
  query: URLSearchParams | null;
  limit: number;
  page: number;
}

export interface AnimeResponse {
  data: IAnime[];
  // other possible fields like pagination info...
}


export const animesearchapi = createApi({
    reducerPath:'api/animesearch',
    baseQuery: fetchBaseQuery({baseUrl:'https://api.jikan.moe/v4/'}),
    endpoints: (builder) => ({
        getAnimeSearch:builder.query<AnimeResponse, AnimeSearchArgs>({
            //query: ({query, page = 1}:{query:string, page:number}) => `anime?${query}&page=${page}`,
            query: (args) => {
              const {query, page} = args;
              return{
                url:`anime?${query}&page=${page}`
              }
            },

            serializeQueryArgs: ({ endpointName }) => {
                return endpointName
              },
              // Always merge incoming data to the cache entry
              merge: (currentCache, newItems) => {
                currentCache.data.push(...newItems.data)
              },
              // Refetch when the page arg changes
              forceRefetch({ currentArg, previousArg }) {
                return currentArg !== previousArg
              },
        
        
        })
    })
})


export const { useGetAnimeSearchQuery } = animesearchapi