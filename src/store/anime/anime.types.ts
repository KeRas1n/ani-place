import { listTags } from "../watchlist/watchlist.slice";

export interface IAnime{
  mal_id: number;

  url: string;

  images: Images;

  trailer: Trailer;

  title: string;

  title_english: string;

  title_japanese: string;

  type: string;

  episodes: number;

  status: string;

  aired: Aired;

  score: number;

  scored_by: number;

  rank: number;

  popularity: number;

  members: number;

  favorites: number;

  synopsis: string;

  year: number;

}



interface Aired {

    from: string;
  
    to: string;
  
    prop: Prop;
  
    string: string;
  
  }


export interface Prop {
    from: Date;
    to: Date;
}
export interface Date {

    day: number;
  
    month: number;
  
    year: number;
  
  }


  export interface Trailer {

    youtube_id: string;
  
    url: string;
  
    embed_url: string;
  
    images: Images2;
  
  }

  export interface Images {

    jpg: Photo;
  
    webp: Photo;
  
  }
  
  
  export interface Photo {
  
    image_url: string;
  
    small_image_url: string;
  
    large_image_url: string;
  
  }

  export interface Images2 {

    image_url: string;
  
    small_image_url: string;
  
    medium_image_url: string;
  
    large_image_url: string;
  
    maximum_image_url: string;
  
  }

export interface IAnimeInfo{
  mal_id:number;
  title:string;
  score:number;
  listTag:listTags;
  images:any
}
