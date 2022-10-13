// Unpublished Work © 2021 - 2022 Deere & Company

import {configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import {reducers} from "./reducers";
import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

// export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof rootReducer>;
// export type AppThunk<ReturnType = void> = ThunkAction<
// ReturnType,
// RootState,
// unknown,
// Action<string>
// >;
