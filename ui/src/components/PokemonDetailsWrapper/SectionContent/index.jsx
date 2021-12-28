import './SectionContent.scss';

import { useContext } from "react";
import PokemonDetailsContext from "../../../context/PokemonDetailContext";
import { formatPokedexNumber } from "../../../utils";
import { BsStars } from 'react-icons/bs';

export const SectionContent = ()=>{

    const { pokemonDetails } = useContext(PokemonDetailsContext);

    return (
        <div className='section-content'>
            <div className='section-title'>
                <h1>{pokemonDetails.name}</h1>
                <small>{formatPokedexNumber(pokemonDetails.pokedexNumber)} {!!pokemonDetails.isLegendary && <BsStars/>}</small>
            </div>
        </div>
    )
}