import {combineReducers} from "redux";

import pokemonReducer from "./pokemon";

export const reducers = combineReducers({
  pokemonState: pokemonReducer,
});