import './InfoContent.scss';

import { useContext } from "react";
import PokemonDetailsContext from "../../../context/PokemonDetailContext";
import { PokemonImage } from "../../PokemonImage";


export const InfoContent = ()=>{

    const { pokemonDetails } = useContext(PokemonDetailsContext);

    return (
        <div className='info-content'>
            
             <PokemonImage pokemon={pokemonDetails} injectClass="info-card"/>
             
        </div>
    )
}