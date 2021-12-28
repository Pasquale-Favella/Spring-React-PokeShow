import './PokemonImage.scss';

import { useState } from 'react';

import {PokeTypesColorMatch} from '../../utils';
import { GiPokecog } from 'react-icons/gi';

export const PokemonImage = ({ pokemon , injectClass = ''})=>{

    const [imgLoaded , setImgLoaded] = useState(false);

    return (
        <div 
            className={`pokeimage-wrapper ${injectClass}`} 
            style={{ backgroundColor :`${injectClass.length===0 && PokeTypesColorMatch[pokemon.type || pokemon.type1]}`  }}
        >
            <img 
                style={imgLoaded ? {} : { display: 'none' }}
                src={`https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemon.pokedexNumber}.gif`}
                onError={(e)=>{e.target.onerror = null; e.target.src=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.pokedexNumber}.png`}}
                alt={pokemon.name}
                onLoad={() => setImgLoaded(true)}
            />
            {!imgLoaded && <GiPokecog/>}
        </div>
    )
}