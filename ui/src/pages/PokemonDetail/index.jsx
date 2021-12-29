import './PokemonDetail.scss'

import { useParams } from "react-router-dom";
import { usePokemon } from "../../hooks/use-pokemon";

import PageLoader from "../../components/PageLoader";
import { PokemonDetailsWrapper } from "../../components/PokemonDetailsWrapper";
import PokemonDetailsContext from '../../context/PokemonDetailContext';

const PokemonDetail = ()=>{

    let { pokemon } = useParams();

    const { isLoading , pokemonDetails , error } = usePokemon(pokemon);


    return (
        <PokemonDetailsContext.Provider value={{ pokemonDetails }}>
            <main className="details-page">
                {isLoading && <PageLoader/>}
                {pokemonDetails &&  <PokemonDetailsWrapper />}
                {error && <h1 className="details-error">Pokemon {pokemon} not found</h1>}
            </main>
        </PokemonDetailsContext.Provider>
    )
}

export default PokemonDetail;