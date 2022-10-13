import {
  FETCH_POKEMON,
  FETCH_DETAILS
} from '../utils/constants'

const initialState = {
  pokemonList: {},
  currentDetails: null,
  loading: false,
}

const pokemonReducer = (state = initialState, action: { type: any; payload: any; }) => {
  switch (action.type) {
    case FETCH_POKEMON:
      return {
        ...state,
        pokemonList: action.payload,
      };
    case FETCH_DETAILS:
      return {
        ...state,
        currentDetails: action.payload,
      };
    default:
      return {...state};
  }
};

export default pokemonReducer;