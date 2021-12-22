import { useQuery } from "react-query";

import { getPokemonPaged } from "../api";

export const usePagedPokemon = (pageNum=0 ,  pageSize=10)=>{
    const { isLoading, error, data :pokeList } = useQuery(
        ['pokeList',pageNum,pageSize], 
        async () =>{
            const  {data : {payload}}  = await getPokemonPaged( pageNum , pageSize );
            return payload;
        }
    );

   return { isLoading, error, pokeList };
}