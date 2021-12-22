import { useQuery } from "react-query";
import { useDebounce } from 'vesuvio-hooks';
import { getPokemonSuggest } from "../api/lib/getPokemonSuggest";


export const usePokemonSuggest = (searchTerm)=>{

    const debouncedSearchQuery = useDebounce(searchTerm);
    const { isLoading, error, data :suggestions } = useQuery(['suggests',debouncedSearchQuery], async () =>{
        if(searchTerm.length>2){
            const  {data : {payload}} = await getPokemonSuggest(debouncedSearchQuery)
            return payload
        }
    }
   )

   return { isLoading, error, suggestions };
}