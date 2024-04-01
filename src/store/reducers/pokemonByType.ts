import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { URL_POKEMON_BY_TYPE } from '../../Api/ApiRest';
import { PokemonState } from '../types/pokemonTypes';

const initialState: PokemonState = {
    pokemons: [],
    loading: false,
    error: null,
};
const CantPokemon = 2
const pokemonByTypeSlice = createSlice({
    name: 'pokemonByType',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPokemonsByType.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchPokemonsByType.fulfilled, (state, action) => {
                state.loading = false;
                state.pokemons = action.payload;
            })
            .addCase(fetchPokemonsByType.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? 'Error fetching pokemons';
            });
    },
});

export const fetchPokemonsByType = createAsyncThunk(
    'pokemon/fetchPokemonsByType',
    async (type: string) => {
        try {
            const response = await axios.get(`${URL_POKEMON_BY_TYPE}${type}?limit=${CantPokemon}`);
            const pokemons = response.data.pokemon;
            const pokemonDetails = await Promise.all(
                pokemons.map(async (pokemon: any) => {
                    const pokemonResponse = await axios.get(pokemon.pokemon.url);
                    return pokemonResponse.data;
                })
            );
            return pokemonDetails;
        } catch (err: any) {
            throw err;
        }
    }
);

export default pokemonByTypeSlice.reducer;
