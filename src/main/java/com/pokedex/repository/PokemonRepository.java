package com.pokedex.repository;

import java.util.List;

import com.pokedex.dto.PokemonBaseInfo;
import com.pokedex.models.Pokemon;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface PokemonRepository extends JpaRepository<Pokemon,Integer> {

    @Query(
        nativeQuery = true,
        value=
        "select p.pokedex_number as pokedexnumber , p.base_total as basetotal, p.name , p.generation , p.type1 as type "
        +"from pokemon as p "
        +"inner join (SELECT  max(d.base_total) base , d.generation  FROM pokemon as d group by d.generation ) as pm on p.generation= pm.generation "
        +"and p.base_total = pm.base "
    )
    List<PokemonBaseInfo> findBestPokemonByGeneration();

    @Query(
        nativeQuery = true,
        value=
        "select p.pokedex_number as pokedexnumber , p.base_total as basetotal, p.name , p.generation , p.type1 as type "
        +"from pokemon as p "
    )
    List<PokemonBaseInfo> findAllBaseInfos();


    @Query(
        nativeQuery = true,
        value=
        "select p.pokedex_number as pokedexnumber , p.base_total as basetotal, p.name , p.generation , p.type1 as type "
        +"from pokemon as p ",
        countQuery = "SELECT count(*) FROM POKEMON "
    )
    Page<PokemonBaseInfo> findAllBaseInfosPage(Pageable pageable);

    @Query(
        nativeQuery = true,
        value=
        "select p.pokedex_number as pokedexnumber , p.base_total as basetotal, p.name , p.generation , p.type1 as type "
        +"from pokemon as p "
        +"where LOWER(p.name) like %:term% "
        +"limit 5 "
    )
    List<PokemonBaseInfo> findAllBySuggest(@Param("term") String term);
    
}
