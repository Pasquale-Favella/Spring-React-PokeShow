import { useQuery } from "react-query";

import { getPokemon } from "../api";

export const usePokemon = (pokemonName)=>{
    const { isLoading, error, data :pokemonDetails } = useQuery(
        ['pokemon',pokemonName], 
        async () =>{
            const  {data : {payload}}  = await getPokemon(pokemonName);
            return payload;
        }
    );

   return { isLoading, error, pokemonDetails };
}