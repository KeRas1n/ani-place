import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IAnime } from "./anime.types";

export const animesingleapi = createApi({
    reducerPath:'api/animesingle',
    baseQuery: fetchBaseQuery({baseUrl:'https://api.jikan.moe/v4/'}),
    endpoints: build => ({
        getSingleAnime:build.query<IAnime[], number>({query: (id:number) => `anime/${id}/full`})
    })
})


export const { useGetSingleAnimeQuery} = animesingleapi