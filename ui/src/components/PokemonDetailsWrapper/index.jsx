import { useContext } from "react";
import PokemonDetailsContext from "../../context/PokemonDetailContext";


export const PokemonDetailsWrapper = ()=>{

    const { pokemonDetails } = useContext(PokemonDetailsContext);

    return(
        <>
            Pokemon {pokemonDetails.name}
        </>
    )
}