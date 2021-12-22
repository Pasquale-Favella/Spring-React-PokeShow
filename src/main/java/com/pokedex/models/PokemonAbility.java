package com.pokedex.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class PokemonAbility {
    
    @Id
    @GeneratedValue
    private Integer id;

    String ability;

    @JsonIgnore
    private Integer pokedexNum;


    public PokemonAbility() {
    }


    public PokemonAbility(Integer pokedexNum, String ability) {
        this.pokedexNum = pokedexNum;
        this.ability = ability;
    }



    public Integer getPokedexNum() {
        return this.pokedexNum;
    }

    public void setPokedexNum(Integer pokedexNum) {
        this.pokedexNum = pokedexNum;
    }

    public String getAbility() {
        return this.ability;
    }

    public void setAbility(String ability) {
        this.ability = ability;
    }


   

    
}


