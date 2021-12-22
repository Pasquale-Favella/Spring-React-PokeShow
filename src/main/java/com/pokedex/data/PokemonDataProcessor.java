package com.pokedex.data;

import com.pokedex.models.Pokemon;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.batch.item.ItemProcessor;

public class PokemonDataProcessor implements ItemProcessor<PokemonInput,Pokemon>{

    private static final Logger log = LoggerFactory.getLogger(PokemonDataProcessor.class); 

    @Override
    public Pokemon process(final PokemonInput pokemonInput) throws Exception {
        
        Pokemon pokemon = new Pokemon();

        setBaseInfo(pokemon,pokemonInput);

        setAgainst(pokemon,pokemonInput);

        log.info("Converting "+pokemonInput.toString() + " \n to \n"+pokemon.toString());

        return pokemon;
    }

    private void setBaseInfo(Pokemon pokemon , PokemonInput pokemonInput){

        pokemon.setPokedexNumber(
            Integer.parseInt(pokemonInput.getPokedex_number()) 
        );

        pokemon.setAttack(
            Integer.parseInt(pokemonInput.getAttack())
        );

        pokemon.setBaseTotal(
            Integer.parseInt(pokemonInput.getBase_total())
        );

        pokemon.setDefense(
            Integer.parseInt(pokemonInput.getDefense())
        );

        pokemon.setHp(
            Integer.parseInt(pokemonInput.getHp())
        );

        pokemon.setSpAttack(
            Integer.parseInt(pokemonInput.getSp_attack())
        );

        pokemon.setSpDefense(
            Integer.parseInt(pokemonInput.getSp_defense())
        );

        pokemon.setSpeed(
            Integer.parseInt(pokemonInput.getSpeed())
        );

        pokemon.setName(pokemonInput.getName());

        pokemon.setGeneration(
            Integer.parseInt(pokemonInput.getGeneration())
        );

        pokemon.setType1(pokemonInput.getType1());
        pokemon.setType2(pokemonInput.getType2());

        pokemon.setIsLegendary(
            Integer.parseInt(pokemonInput.getIs_legendary())
        );
        
        pokemon.setAbilities(
            pokemonInput.getAbilities()
        );
    }


    private void setAgainst(Pokemon pokemon , PokemonInput pokemonInput){
						

        pokemon.setAgainstRock(
            Double.parseDouble(pokemonInput.getAgainst_rock())
        );

        pokemon.setAgainstBug(
            Double.parseDouble(pokemonInput.getAgainst_bug())
        );

        pokemon.setAgainstDark(
            Double.parseDouble(pokemonInput.getAgainst_dark())
        );

        pokemon.setAgainstDragon(
            Double.parseDouble(pokemonInput.getAgainst_dragon())
        );

        pokemon.setAgainstElectric(
            Double.parseDouble(pokemonInput.getAgainst_electric())
        );

        pokemon.setAgainstFairy(
            Double.parseDouble(pokemonInput.getAgainst_fairy())
        );

        pokemon.setAgainstFight(
            Double.parseDouble(pokemonInput.getAgainst_fight())
        );

        pokemon.setAgainstFire(
            Double.parseDouble(pokemonInput.getAgainst_fire())
        );

        pokemon.setAgainstFlying(
            Double.parseDouble(pokemonInput.getAgainst_flying())
        );

        pokemon.setAgainstGhost(
            Double.parseDouble(pokemonInput.getAgainst_ghost())
        );

        pokemon.setAgainstGrass(
            Double.parseDouble(pokemonInput.getAgainst_grass())
        );

        pokemon.setAgainstGround(
            Double.parseDouble(pokemonInput.getAgainst_ground())
        );

        pokemon.setAgainstIce(
            Double.parseDouble(pokemonInput.getAgainst_ice())
        );

        pokemon.setAgainstNormal(
            Double.parseDouble(pokemonInput.getAgainst_normal())
        );

        pokemon.setAgainstPoison(
            Double.parseDouble(pokemonInput.getAgainst_poison())
        );

        pokemon.setAgainstPsychic(
            Double.parseDouble(pokemonInput.getAgainst_psychic())
        );

        pokemon.setAgainstSteel(
            Double.parseDouble(pokemonInput.getAgainst_steel())
        );

        pokemon.setAgainstWater(
            Double.parseDouble(pokemonInput.getAgainst_water())
        );
    }

    
}

