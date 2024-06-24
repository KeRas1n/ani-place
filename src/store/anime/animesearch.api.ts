import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IAnime } from "./anime.types";

export const animesearchapi = createApi({
    reducerPath:'api/animesearch',
    baseQuery: fetchBaseQuery({baseUrl:'https://api.jikan.moe/v4/'}),
    endpoints: (builder) => ({
        getAnimeSearch:builder.query<IAnime[], number>({
            query: ({query, page = 1}) => `anime?${query}&page=${page}`,

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