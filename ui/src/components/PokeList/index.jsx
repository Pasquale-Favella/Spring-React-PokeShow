import './PokeList.scss';

import PageLoader from '../PageLoader';
import PokeCard from '../PokeCard';
import { useBestPokemon } from '../../hooks/use-best-pokemon';

const PokeList = ()=>{

    const {isLoading,pokeBestList} = useBestPokemon();

    if(isLoading) return (<PageLoader/>);
    

    return (
        <div className="pokelist-wrapper" >
            <div className='pokelist'>
                {pokeBestList && pokeBestList.map(pokemon => <PokeCard key={pokemon.pokedexNumber} pokemon={pokemon} scale={0.75}/>)}
            </div>
        </div>
    )
}

export default PokeList;