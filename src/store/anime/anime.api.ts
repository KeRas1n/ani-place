import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IAnime } from "./anime.types";

export const animeapi = createApi({
    reducerPath:'api/anime',
    baseQuery: fetchBaseQuery({baseUrl:'https://api.jikan.moe/v4/'}),
    endpoints: (builder) => ({
        getTopAnime:builder.query<IAnime[], number>({
            query: ({limit = 5, page = 1}) => `top/anime?limit=${limit}&page=${page}`,
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