import { combineReducers, configureStore } from '@reduxjs/toolkit';
import pokemonByTypeSlice from './reducers/pokemonByType';
import pokemonReducer from './reducers/pokemonReducer';

const rootReducer = combineReducers({
  pokemonList: pokemonByTypeSlice,
  allPokemon: pokemonReducer
});

const store = configureStore({
  reducer: rootReducer
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
