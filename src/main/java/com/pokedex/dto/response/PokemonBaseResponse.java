package com.pokedex.dto.response;

public abstract class PokemonBaseResponse <T>{
    
    private Integer status;

    private T payload;


    public PokemonBaseResponse(Integer status, T payload) {
        this.status = status;
        this.payload = payload;
    }

    public Integer getStatus() {
        return this.status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public T getPayload() {
        return this.payload;
    }

    public void setPayload(T payload) {
        this.payload = payload;
    }

}

