import './InfoContent.scss';

import { useContext } from "react";
import PokemonDetailsContext from "../../../context/PokemonDetailContext";
import { PokemonImage } from "../../PokemonImage";
import { PokeTypesColorMatch } from '../../../utils';


export const InfoContent = ()=>{

    const { pokemonDetails } = useContext(PokemonDetailsContext);

    return (
        <div className='info-content'>

             <PokemonImage pokemon={pokemonDetails} injectClass="info-card"/>

             <div className='ability-section'>
                 <h4>Ability</h4>
                 <ul className='ability-list'>
                {
                    pokemonDetails.ability.map((abilityObj , i)=><li key={i}>{abilityObj.ability}</li>)
                }
                </ul>
             </div>
             <div className='type-section'>
                 <h4>Type</h4>
                 <div className='type-list'>
                    {pokemonDetails?.type1 && <span style={{ backgroundColor :`${ PokeTypesColorMatch[pokemonDetails.type1]}`  }}>{pokemonDetails.type1}</span>}
                    {pokemonDetails?.type2 && <span style={{ backgroundColor :`${ PokeTypesColorMatch[pokemonDetails.type2]}`  }}>{pokemonDetails.type2}</span>}

                 </div>
             </div>
        </div>
    )
}