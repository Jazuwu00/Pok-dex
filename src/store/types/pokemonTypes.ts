
export interface Pokemon {
    id: number;
    name: string;
    weight: number;
    height: number;
    types: {
        slot: number;
        type: {
            name: string;
            url: string;
        };
    }[];
    abilities: {
        ability: {
            name: string;
            url: string;
        };
        is_hidden: boolean;
        slot: number;
    }[];
    base_experience: number;
    forms: {
        name: string;
        url: string;
    }[];
    game_indices: {
        game_index: number;
        version: {
            name: string;
            url: string;
        };
    }[];
    sprites: {
        back_default: string;
        back_female: string;
        back_shiny: string;
        back_shiny_female: string;
        front_default: string;
        front_female: string;
        front_shiny: string;
        front_shiny_female: string;
        other: {
            dream_world: {
                front_default: string;
                front_female: string | null;
            };
            official_artwork: {
                front_default: string;
            };
        };
    };

}
export interface PokemonState {
    pokemons: Pokemon[];
    loading: boolean;
    error: string | null
}

