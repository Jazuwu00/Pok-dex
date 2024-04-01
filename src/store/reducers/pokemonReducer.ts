

import { PokemonState } from '../types/pokemonTypes';
import { URL_POKEMON } from '../../Api/ApiRest';
import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


const initialState: PokemonState = {
    pokemons: [],
    loading: false,
    error: null,
};
const CantPokemon = 18
const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllPokemons.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchAllPokemons.fulfilled, (state, action) => {
                state.loading = false;
                state.pokemons = action.payload;
            })
            .addCase(fetchAllPokemons.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? 'Error fetching pokemons';
            });
    },
});


export const fetchAllPokemons = createAsyncThunk('pokemon/fetchAllPokemons', async () => {
    try {
        const response = await axios.get(`${URL_POKEMON}?limit=${CantPokemon}`);
        const pokemonResponse = response.data.results;
        const pokemon = await Promise.all(
            pokemonResponse.map(async (pokemonUrl: any) => {
                const pokemon = await axios.get(pokemonUrl.url);
                return pokemon.data;
            })
        );
        return pokemon;
    } catch (err: any) {
        throw err;
    }



});

export default pokemonSlice.reducer;