package com.pokedex.repository;

import java.util.List;

import com.pokedex.models.PokemonAbility;

import org.springframework.data.jpa.repository.JpaRepository;

public interface PokemonAbilityRepo extends JpaRepository<PokemonAbility,Integer>{

    List<PokemonAbility> findByPokedexNum(Integer pokedexNum);
    
}
