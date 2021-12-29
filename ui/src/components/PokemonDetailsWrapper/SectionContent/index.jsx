import './SectionContent.scss';

import { useContext } from "react";
import PokemonDetailsContext from "../../../context/PokemonDetailContext";


export const SectionContent = ()=>{

    const { pokemonDetails } = useContext(PokemonDetailsContext);

    return (
        <div className='section-content'>
        
            <h2>Infos</h2>
        </div>
    )
}