import { api } from "./api";

export const getBestPokemon = async ()=> await api.get(`/pokemon/best`);