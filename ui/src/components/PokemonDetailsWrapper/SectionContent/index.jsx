import './SectionContent.scss';

import { useContext } from "react";
import PokemonDetailsContext from "../../../context/PokemonDetailContext";


export const SectionContent = ()=>{

    const { pokemonDetails } = useContext(PokemonDetailsContext);

    return (
        <div className='section-content'>
        
            <h2>Info</h2>

            <div className="stats-section">

                        <h4>Stats</h4>
                        <div className="stats-table">

                            <div className='stat'>Hp <span className='value'>{pokemonDetails.hp}</span></div>
                            <div className='stat'>Attack <span className='value'>{pokemonDetails.attack}</span></div>
                            <div className='stat'>Defense <span className='value'>{pokemonDetails.defense}</span></div>
                            <div className='stat'>Sp.Attack <span className='value'>{pokemonDetails.spAttack}</span></div>
                            <div className='stat'>Sp.Defense <span className='value'>{pokemonDetails.spDefense}</span></div>
                            <div className='stat'>Speed <span className='value'>{pokemonDetails.speed}</span></div>
                            <div className='stat'><b>Total</b> <span className='value'>{pokemonDetails.baseTotal}</span></div>
                        </div>
            </div>
        </div>
    )
}