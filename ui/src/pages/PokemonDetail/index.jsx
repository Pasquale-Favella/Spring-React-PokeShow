import { useParams } from "react-router-dom";

const PokemonDetail = ()=>{

    let { pokemon } = useParams();

    return (
        <>
            Detail works : {pokemon}
        </>
    )
}

export default PokemonDetail;