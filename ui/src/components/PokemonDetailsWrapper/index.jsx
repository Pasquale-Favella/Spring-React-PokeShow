import './PokemonDetailsWrapper.scss';

import { useContext } from "react";
import PokemonDetailsContext from "../../context/PokemonDetailContext";
import { PokemonImage } from "../PokemonImage";
import { SectionContent } from './SectionContent';
import { InfoContent } from './InfoContent';


export const PokemonDetailsWrapper = ()=>{

    const { pokemonDetails } = useContext(PokemonDetailsContext);

    return(
        <div className="pokemon-details-grid">
            <SectionContent/>
            <InfoContent />
        </div>
    )
}