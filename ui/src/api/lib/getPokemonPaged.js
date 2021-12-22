import { api } from "./api";

export const getPokemonPaged = async (pageNum , pageSize)=> await api.get(`/pokemon?pageNum=${pageNum}&pageSize=${pageSize}`);