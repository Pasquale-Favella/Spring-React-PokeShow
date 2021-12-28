import { useState } from 'react';
import { GiPokecog } from 'react-icons/gi';
import { useHistory } from 'react-router-dom';
import {PokeTypesColorMatch} from '../../../utils';

const TableRow = ({pokemon})=>{
    
    const [imgLoaded , setImgLoaded] = useState(false);

    let history = useHistory();

    return (
        <tr onClick={()=>history.push(`/pokemon/${pokemon.name}`)}>
            <td>
                <div className='sprite-wrapper' style={{ backgroundColor :`${PokeTypesColorMatch[pokemon.type]}`  }}>
                    <img 
                        style={imgLoaded ? {} : { display: 'none' }}
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.pokedexNumber}.png`}
                        alt={pokemon.name}
                        onLoad={() => setImgLoaded(true)}
                    />
                    {!imgLoaded && <GiPokecog/>}
                </div>
            </td>
            <td>{pokemon.name}</td>
            <td>{pokemon.generation}</td>
            <td>{pokemon.pokedexNumber}</td>
            <td>{pokemon.baseTotal}</td>
        </tr>
    )
}

export default TableRow;