import { useHistory } from 'react-router-dom';
import { formatPokedexNumber } from '../../../utils';
import { PokemonImage } from '../../PokemonImage';

const TableRow = ({pokemon})=>{

    let history = useHistory();

    return (
        <tr onClick={()=>history.push(`/pokemon/${pokemon.name}`)}>
            <td>
                <PokemonImage pokemon={pokemon}/>
            </td>
            <td>{pokemon.name}</td>
            <td>{pokemon.generation}</td>
            <td>{formatPokedexNumber( pokemon.pokedexNumber )}</td>
            <td>{pokemon.baseTotal}</td>
        </tr>
    )
}

export default TableRow;