import {useState} from 'react';
import './Pokecard.scss';
import { GiPokecog } from 'react-icons/gi';
import {PokeTypesColorMatch} from '../../utils';
import { useHistory } from 'react-router-dom';

const PokeCard = ({pokemon , scale = 1})=>{

    const [imgLoaded , setImgLoaded] = useState(false);

    let history = useHistory();

    return (
        <div className='pokemon' style={{ transform: `scale(${scale})` ,margin : `${scale*10}px` , backgroundColor :`${PokeTypesColorMatch[pokemon.type]}` }}
            onClick={()=>history.push(`/pokemon/${pokemon.name}`)}
        >
             <div className="img-container">
                <img 
                    style={imgLoaded ? {} : { display: 'none' }}
                    src={`https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemon.pokedexNumber}.gif`}
                    onError={(e)=>{e.target.onerror = null; e.target.src=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.pokedexNumber}.png`}}
                    alt={pokemon.name}
                    onLoad={() => setImgLoaded(true)}
                />
                {!imgLoaded && <GiPokecog/>}
             </div>
             <div className="info">
                 <span className="number">#{pokemon.pokedexNumber}</span>
                 <h3 className="name">{pokemon.name}</h3>
                 <small >Generation : <span>{pokemon.generation}</span></small>
                 <small >Base stats : <span>{pokemon.baseTotal}</span></small>
             </div>
         </div>
         )
}

export default PokeCard;