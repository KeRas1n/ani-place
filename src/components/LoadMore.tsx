import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer"
import { AnimeCard } from "./AnimeCard";

let page = 2;
export type AnimeCard = JSX.Element;

export const LoadMore = () => {
    const {ref, inView} = useInView()
    const [data,setData] = useState<AnimeCard[]>([])

    useEffect(() => {
        if(inView){
          fetchAnime(page)
          .then((res) =>{
            setData([...data, ...res]);
            page++;
          })
        }
      }, [inView, data])

  return (
    <div ref={ref}>Loading....</div>
  )
}
