import './Pokecard.scss';

import {formatPokedexNumber, PokeTypesColorMatch} from '../../utils';
import { useHistory } from 'react-router-dom';
import { PokemonImage } from '../PokemonImage';

const PokeCard = ({pokemon , scale = 1})=>{

    let history = useHistory();

    return (
        <div className='pokemon' style={{ transform: `scale(${scale})` ,margin : `${scale*10}px` , backgroundColor :`${PokeTypesColorMatch[pokemon.type]}` }}
            onClick={()=>history.push(`/pokemon/${pokemon.name}`)}
        >
             
             <PokemonImage pokemon={pokemon} injectClass="img-container"/>
             <div className="info">
                 <span className="number">{formatPokedexNumber( pokemon.pokedexNumber)}</span>
                 <h3 className="name">{pokemon.name}</h3>
                 <small >Generation : <span>{pokemon.generation}</span></small>
                 <small >Base stats : <span>{pokemon.baseTotal}</span></small>
             </div>
         </div>
         )
}

export default PokeCard;