import { useState } from 'react';
import './Suggestions.scss';
import {PokeTypesColorMatch} from '../../../utils';
import { GiPokecog } from 'react-icons/gi';

import { useHistory } from 'react-router-dom';

export const Suggestion =({pokemon , onSuggestClick})=>{

    const [imgLoaded , setImgLoaded] = useState(false);

    
    let history = useHistory();

    const viewPokemonDetails = ()=>{
        history.push(`/pokemon/${pokemon.name}`);
        onSuggestClick();
    }

    return(
        <li className="suggest" onClick={viewPokemonDetails}>
            <div className='sprite-wrapper' style={{ backgroundColor :`${PokeTypesColorMatch[pokemon.type]}`  }}>
                    <img 
                        style={imgLoaded ? {} : { display: 'none' }}
                        src={`https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemon.pokedexNumber}.gif`}
                        onError={(e)=>{e.target.onerror = null; e.target.src=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.pokedexNumber}.png`}}
                        alt={pokemon.name}
                        onLoad={() => setImgLoaded(true)}
                    />
                    {!imgLoaded && <GiPokecog/>}
                </div>
            <span>{pokemon.name}</span>
        </li>
    )
}