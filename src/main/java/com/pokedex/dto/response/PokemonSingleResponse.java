package com.pokedex.dto.response;

import com.pokedex.models.Pokemon;

public class PokemonSingleResponse extends PokemonBaseResponse<Pokemon>{

    public PokemonSingleResponse(Integer status, Pokemon payload) {
        super(status, payload);
    }
    
}
