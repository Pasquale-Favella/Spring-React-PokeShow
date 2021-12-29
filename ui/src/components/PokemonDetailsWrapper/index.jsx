import './PokemonDetailsWrapper.scss';

import { useContext } from "react";
import PokemonDetailsContext from "../../context/PokemonDetailContext";
import { SectionContent } from './SectionContent';
import { InfoContent } from './InfoContent';
import { BsStars } from 'react-icons/bs';
import { formatPokedexNumber } from '../../utils';


export const PokemonDetailsWrapper = ()=>{

    const { pokemonDetails } = useContext(PokemonDetailsContext);

    return(
        <>
            <div className='pokemon-details-title'>
                <h1>{pokemonDetails.name}</h1>
                <small>{formatPokedexNumber(pokemonDetails.pokedexNumber)} {!!pokemonDetails.isLegendary && <BsStars/>}</small>
            </div>
            <div className="pokemon-details-grid">
                <SectionContent/>
                <InfoContent />
            </div>
        </>
    )
}