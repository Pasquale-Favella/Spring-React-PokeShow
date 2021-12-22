package com.pokedex.dto.response;

import java.util.List;

import com.pokedex.dto.PokemonBaseInfo;

public class PokemonListResponse extends PokemonBaseResponse<List<PokemonBaseInfo>> {

    public PokemonListResponse(Integer status, List<PokemonBaseInfo> list) {
        super(status, list);
    }
    
}
