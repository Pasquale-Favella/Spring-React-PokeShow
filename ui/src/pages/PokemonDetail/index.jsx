import { useParams } from "react-router-dom";
import { usePokemon } from "../../hooks/use-pokemon";

const PokemonDetail = ()=>{

    let { pokemon } = useParams();

    const { isLoading , pokemonDetails } = usePokemon(pokemon);

    return (
        <>
            Detail works : {pokemon}
            <br/>
            {pokemonDetails && JSON.stringify(pokemonDetails,null,2)}
        </>
    )
}

export default PokemonDetail;