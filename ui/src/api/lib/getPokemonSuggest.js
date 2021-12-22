import { api } from "./api";

export const getPokemonSuggest = async (term)=> await api.get(`/pokemon/suggest?pokemon=${term}`);