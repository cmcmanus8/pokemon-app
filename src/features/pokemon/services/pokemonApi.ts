// Original api documentation
// https://pokeapi.co/docs/v2#pokemon

// ts wrapper
// https://github.com/Gabb-c/pokenode-ts
// import { NamedAPIResourceList, PokemonClient } from 'pokenode-ts';

// const api = new PokemonClient();

import axios from 'axios';
const API_URL = 'https://pokeapi.co/api/v2'
const API = axios.create({baseURL: API_URL});

export const fetchPokemon = (limit: number) => API.get(`/pokemon?limit=${limit}`)
export const fetchDetails = (id: string | undefined) => API.get(`/pokemon/${id}`)

