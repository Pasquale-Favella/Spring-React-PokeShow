import { api } from "./api";

export const getPokemon = async (pokemonName)=> await api.get(`/pokemon/${pokemonName.toLowerCase()}`);