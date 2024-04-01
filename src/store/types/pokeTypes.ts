export const pokeTypes = [
    {
        "id": "1",
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
    },
    {
        "id": "2",
        "name": "fighting",
        "url": "https://pokeapi.co/api/v2/type/2/"
    },
    {
        "id": "3",
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/"
    },
    {
        "id": "4",
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/"
    },
    {
        "id": "5",
        "name": "ground",
        "url": "https://pokeapi.co/api/v2/type/5/"
    },
    {
        "id": "6",
        "name": "rock",
        "url": "https://pokeapi.co/api/v2/type/6/"
    },
    {
        "id": "7",
        "name": "bug",
        "url": "https://pokeapi.co/api/v2/type/7/"
    },
    {
        "id": "8",
        "name": "ghost",
        "url": "https://pokeapi.co/api/v2/type/8/"
    },
    {
        "id": "9",
        "name": "steel",
        "url": "https://pokeapi.co/api/v2/type/9/"
    },
    {
        "id": "10",
        "name": "fire",
        "url": "https://pokeapi.co/api/v2/type/10/"
    },
    {
        "id": "11",
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
    },
    {
        "id": "12",
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
    },
    {
        "id": "13",
        "name": "electric",
        "url": "https://pokeapi.co/api/v2/type/13/"
    },
    {
        "id": "14",
        "name": "psychic",
        "url": "https://pokeapi.co/api/v2/type/14/"
    },
    {
        "id": "15",
        "name": "ice",
        "url": "https://pokeapi.co/api/v2/type/15/"
    },
    {
        "id": "16",
        "name": "dragon",
        "url": "https://pokeapi.co/api/v2/type/16/"
    },
    {
        "id": "17",
        "name": "dark",
        "url": "https://pokeapi.co/api/v2/type/17/"
    },
    {
        "id": "18",
        "name": "fairy",
        "url": "https://pokeapi.co/api/v2/type/18/"
    },
    // {
    //     "id": "10001",
    //     "name": "unknown",
    //     "url": "https://pokeapi.co/api/v2/type/10001/"
    // },
    // {
    //     "id": "10002",
    //     "name": "shadow",
    //     "url": "https://pokeapi.co/api/v2/type/10002/"
    // }
]


export const background: { [key in typeof pokeTypes[number]['name']]: string } = {
    normal: '#A8A77A',
    fire: '#EE8130',
    water: '#6390F0',
    electric: '#F7D02C',
    grass: '#7AC74C',
    ice: '#96D9D6',
    fighting: '#C22E28',
    poison: '#A33EA1',
    ground: '#E2BF65',
    flying: '#A98FF3',
    psychic: '#F95587',
    bug: '#A6B91A',
    rock: '#B6A136',
    ghost: '#735797',
    dragon: '#3074c2',
    dark: '#35302d',
    steel: '#B7B7CE',
    fairy: '#D685AD',
};

