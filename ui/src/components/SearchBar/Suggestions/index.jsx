import './Suggestions.scss';

import { useHistory } from 'react-router-dom';
import { PokemonImage } from '../../PokemonImage';

export const Suggestion =({pokemon , onSuggestClick})=>{

    let history = useHistory();

    const viewPokemonDetails = ()=>{
        history.push(`/pokemon/${pokemon.name}`);
        onSuggestClick();
    }

    return(
        <li className="suggest" onClick={viewPokemonDetails}>
            <PokemonImage pokemon={pokemon}/>
            <span>{pokemon.name}</span>
        </li>
    )
}