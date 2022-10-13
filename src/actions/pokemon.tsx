import {
  FETCH_POKEMON,
  FETCH_DETAILS,
} from '../utils/constants'

import * as api from '../features/pokemon/services/pokemonApi'

// Action creators
export const fetchPokemon = (limit) => async (dispatch) => {
  try {
    const { data } = await api.fetchPokemon(limit);

    dispatch({type: FETCH_POKEMON, payload: data});
  } catch (error) {
    console.log(error.message);
  }
}

export const fetchDetails = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchDetails(id);

    console.log(data);

    dispatch({type: FETCH_DETAILS, payload: data});
  } catch (error) {
    console.log(error.message);
  }
};
