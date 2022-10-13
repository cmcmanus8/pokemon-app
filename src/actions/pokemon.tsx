import {
  FETCH_POKEMON,
  FETCH_DETAILS,
} from '../utils/constants'

import * as api from '../features/pokemon/services/pokemonApi'

// Action creators
export const fetchPokemon = (limit: number) => async (dispatch: (arg0: { type: string; payload: any; }) => void) => {
  try {
    const { data } = await api.fetchPokemon(limit);

    dispatch({type: FETCH_POKEMON, payload: data});
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
}

export const fetchDetails = (id: string | undefined) => async (dispatch: (arg0: { type: string; payload: any; }) => void) => {
  try {
    const { data } = await api.fetchDetails(id);

    console.log(data);

    dispatch({type: FETCH_DETAILS, payload: data});
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};
