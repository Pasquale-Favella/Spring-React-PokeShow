import { useContext } from "react";
import PokemonDetailsContext from "../../context/PokemonDetailContext";
import { PokemonImage } from "../PokemonImage";


export const PokemonDetailsWrapper = ()=>{

    const { pokemonDetails } = useContext(PokemonDetailsContext);

    return(
        <div >
            Pokemon {pokemonDetails.name}
            <PokemonImage pokemon={pokemonDetails} />
        </div>
    )
}