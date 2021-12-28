import { useContext } from "react";
import PokemonDetailsContext from "../../../context/PokemonDetailContext";
import { formatPokedexNumber } from "../../../utils";

export const SectionContent = ()=>{

    const { pokemonDetails } = useContext(PokemonDetailsContext);

    

    return (
        <div>
            <h1>{pokemonDetails.name}</h1>
            <small>{formatPokedexNumber(pokemonDetails.pokedexNumber)}</small>
        </div>
    )
}