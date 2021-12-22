import { useQuery } from "react-query";

import { getBestPokemon } from "../api";

export const useBestPokemon = ()=>{
    const { isLoading, error, data :pokeBestList } = useQuery(
        ['pokeBest'], 
        async () =>{
            const  {data : {payload}}  = await getBestPokemon();
            return payload;
        }
    );

   return { isLoading, error, pokeBestList };
}