package com.pokedex.service;

import java.util.List;
import java.util.Optional;

import com.pokedex.dto.PokemonBaseInfo;
import com.pokedex.models.Pokemon;
import com.pokedex.repository.PokemonAbilityRepo;
import com.pokedex.repository.PokemonRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

@Service
public class PokemonService {

    @Autowired
    PokemonRepository pokemonRepository;

    @Autowired
    PokemonAbilityRepo pokemonAbilityRepo;


    public Page<PokemonBaseInfo> findAllPaged(int page , int size){
        return pokemonRepository.findAllBaseInfosPage(PageRequest.of(page, size));
    }

    public Optional<Pokemon> findById(Integer id){

        return pokemonRepository.findById(id).
                map((pokemon)-> {
                    pokemon.setAbility(pokemonAbilityRepo.findByPokedexNum(id));
                    return pokemon;
                });
    }

    public Optional<Pokemon> findByPokemonName(String pokemonName){

        return pokemonRepository.findByName(pokemonName).
            map((pokemon)-> {
                pokemon.setAbility(
                    pokemonAbilityRepo.findByPokedexNum(pokemon.getPokedexNumber())
                );
                return pokemon;
            });
    }

    public List<PokemonBaseInfo> findBest(){
        return pokemonRepository.findBestPokemonByGeneration();
    }

    public List<PokemonBaseInfo> findSuggest(String term){
        return pokemonRepository.findAllBySuggest(term);
    }


    
}

