import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AnimeResponse, AnimeSearchArgs } from "./animesearch.api";

export const animeapi = createApi({
    reducerPath:'api/anime',
    baseQuery: fetchBaseQuery({baseUrl:'https://api.jikan.moe/v4/'}),
    endpoints: (builder) => ({
        getTopAnime:builder.query<AnimeResponse, AnimeSearchArgs>({
            query: (args) => {
              const {limit, page} = args;

              return{
                url:`top/anime?limit=${limit}&page=${page}`
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
        
        }),
    })
})


export const {useGetTopAnimeQuery} = animeapi