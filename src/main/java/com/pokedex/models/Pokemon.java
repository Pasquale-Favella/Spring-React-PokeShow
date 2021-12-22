package com.pokedex.models;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Transient;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Pokemon {

    @Id
    private Integer pokedexNumber;
    private int attack;	
    private int baseTotal;
    private int defense;
    private int hp;	
    private String name;	
    private int spAttack;
    private int spDefense;
    private int speed;
    private String type1;
    private String type2;	
    private int generation;	
    private int isLegendary;
    @JsonIgnore
    private String abilities;

    private Double againstBug;
    private Double againstDark;
    private Double againstDragon;	
    private Double againstElectric;	
    private Double againstFairy;
    private Double againstFight;
    private Double againstFire;
    private Double againstFlying;	
    private Double againstGhost;	
    private Double againstGrass;	
    private Double againstGround;	
    private Double againstIce;
    private Double againstNormal;	
    private Double againstPoison;	
    private Double againstPsychic;	
    private Double againstRock;
    private Double againstSteel;	
    private Double againstWater;	

    @Transient
    private List<PokemonAbility> ability;

    public List<PokemonAbility> getAbility() {
        return this.ability;
    }

    public void setAbility(List<PokemonAbility> ability) {
        this.ability = ability;
    }


    public Integer getPokedexNumber() {
        return this.pokedexNumber;
    }

    public void setPokedexNumber(Integer pokedexNumber) {
        this.pokedexNumber = pokedexNumber;
    }

    public int getAttack() {
        return this.attack;
    }

    public void setAttack(int attack) {
        this.attack = attack;
    }

    public int getBaseTotal() {
        return this.baseTotal;
    }

    public void setBaseTotal(int baseTotal) {
        this.baseTotal = baseTotal;
    }

    public int getDefense() {
        return this.defense;
    }

    public void setDefense(int defense) {
        this.defense = defense;
    }

    public int getHp() {
        return this.hp;
    }

    public void setHp(int hp) {
        this.hp = hp;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getSpAttack() {
        return this.spAttack;
    }

    public void setSpAttack(int spAttack) {
        this.spAttack = spAttack;
    }

    public int getSpDefense() {
        return this.spDefense;
    }

    public void setSpDefense(int spDefense) {
        this.spDefense = spDefense;
    }

    public int getSpeed() {
        return this.speed;
    }

    public void setSpeed(int speed) {
        this.speed = speed;
    }

    public String getType1() {
        return this.type1;
    }

    public void setType1(String type1) {
        this.type1 = type1;
    }

    public String getType2() {
        return this.type2;
    }

    public void setType2(String type2) {
        this.type2 = type2;
    }

    public int getGeneration() {
        return this.generation;
    }

    public void setGeneration(int generation) {
        this.generation = generation;
    }

    public int getIsLegendary() {
        return this.isLegendary;
    }

    public void setIsLegendary(int isLegendary) {
        this.isLegendary = isLegendary;
    }

    public String getAbilities() {
        return this.abilities;
    }

    public void setAbilities(String abilities) {
        this.abilities = abilities;
    }

    public Double getAgainstBug() {
        return this.againstBug;
    }

    public void setAgainstBug(Double againstBug) {
        this.againstBug = againstBug;
    }

    public Double getAgainstDark() {
        return this.againstDark;
    }

    public void setAgainstDark(Double againstDark) {
        this.againstDark = againstDark;
    }

    public Double getAgainstDragon() {
        return this.againstDragon;
    }

    public void setAgainstDragon(Double againstDragon) {
        this.againstDragon = againstDragon;
    }

    public Double getAgainstElectric() {
        return this.againstElectric;
    }

    public void setAgainstElectric(Double againstElectric) {
        this.againstElectric = againstElectric;
    }

    public Double getAgainstFairy() {
        return this.againstFairy;
    }

    public void setAgainstFairy(Double againstFairy) {
        this.againstFairy = againstFairy;
    }

    public Double getAgainstFight() {
        return this.againstFight;
    }

    public void setAgainstFight(Double againstFight) {
        this.againstFight = againstFight;
    }

    public Double getAgainstFire() {
        return this.againstFire;
    }

    public void setAgainstFire(Double againstFire) {
        this.againstFire = againstFire;
    }

    public Double getAgainstFlying() {
        return this.againstFlying;
    }

    public void setAgainstFlying(Double againstFlying) {
        this.againstFlying = againstFlying;
    }

    public Double getAgainstGhost() {
        return this.againstGhost;
    }

    public void setAgainstGhost(Double againstGhost) {
        this.againstGhost = againstGhost;
    }

    public Double getAgainstGrass() {
        return this.againstGrass;
    }

    public void setAgainstGrass(Double againstGrass) {
        this.againstGrass = againstGrass;
    }

    public Double getAgainstGround() {
        return this.againstGround;
    }

    public void setAgainstGround(Double againstGround) {
        this.againstGround = againstGround;
    }

    public Double getAgainstIce() {
        return this.againstIce;
    }

    public void setAgainstIce(Double againstIce) {
        this.againstIce = againstIce;
    }

    public Double getAgainstNormal() {
        return this.againstNormal;
    }

    public void setAgainstNormal(Double againstNormal) {
        this.againstNormal = againstNormal;
    }

    public Double getAgainstPoison() {
        return this.againstPoison;
    }

    public void setAgainstPoison(Double againstPoison) {
        this.againstPoison = againstPoison;
    }

    public Double getAgainstPsychic() {
        return this.againstPsychic;
    }

    public void setAgainstPsychic(Double againstPsychic) {
        this.againstPsychic = againstPsychic;
    }

    public Double getAgainstRock() {
        return this.againstRock;
    }

    public void setAgainstRock(Double againstRock) {
        this.againstRock = againstRock;
    }

    public Double getAgainstSteel() {
        return this.againstSteel;
    }

    public void setAgainstSteel(Double againstSteel) {
        this.againstSteel = againstSteel;
    }

    public Double getAgainstWater() {
        return this.againstWater;
    }

    public void setAgainstWater(Double againstWater) {
        this.againstWater = againstWater;
    }



    @Override
    public String toString() {
        return "{" +
            " pokedexNumber='" + getPokedexNumber() + "'" +
            ", attack='" + getAttack() + "'" +
            ", baseTotal='" + getBaseTotal() + "'" +
            ", defense='" + getDefense() + "'" +
            ", hp='" + getHp() + "'" +
            ", name='" + getName() + "'" +
            ", spAttack='" + getSpAttack() + "'" +
            ", spDefense='" + getSpDefense() + "'" +
            ", speed='" + getSpeed() + "'" +
            ", type1='" + getType1() + "'" +
            ", type2='" + getType2() + "'" +
            ", generation='" + getGeneration() + "'" +
            ", isLegendary='" + getIsLegendary() + "'" +
            ", abilities='" + getAbilities() + "'" +
            ", againstBug='" + getAgainstBug() + "'" +
            ", againstDark='" + getAgainstDark() + "'" +
            ", againstDragon='" + getAgainstDragon() + "'" +
            ", againstElectric='" + getAgainstElectric() + "'" +
            ", againstFairy='" + getAgainstFairy() + "'" +
            ", againstFight='" + getAgainstFight() + "'" +
            ", againstFire='" + getAgainstFire() + "'" +
            ", againstFlying='" + getAgainstFlying() + "'" +
            ", againstGhost='" + getAgainstGhost() + "'" +
            ", againstGrass='" + getAgainstGrass() + "'" +
            ", againstGround='" + getAgainstGround() + "'" +
            ", againstIce='" + getAgainstIce() + "'" +
            ", againstNormal='" + getAgainstNormal() + "'" +
            ", againstPoison='" + getAgainstPoison() + "'" +
            ", againstPsychic='" + getAgainstPsychic() + "'" +
            ", againstRock='" + getAgainstRock() + "'" +
            ", againstSteel='" + getAgainstSteel() + "'" +
            ", againstWater='" + getAgainstWater() + "'" +
            ", ability='" + getAbility() + "'" +
            "}";
    }
    


   
}

