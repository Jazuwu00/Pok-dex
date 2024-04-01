import React from "react";
import { Pokemon } from "../../store/types/pokemonTypes";
import { background } from "../../store/types/pokeTypes";

interface Props {
  pokemon: Pokemon;
}

const CardPokemon: React.FC<Props> = ({ pokemon }) => {
  const typeNames = pokemon.types.map((typeInfo) => typeInfo.type.name);
  const backgroundColor = background[typeNames[0]] || "#ffffff";

  return (
    <div className=" card m-1 mx-auto " style={{ backgroundColor }}>
      <p className=" position-absolute text-light PokeName overflow-auto text-capitalize">
        {pokemon.name}
      </p>
      <div className="mt-3">
        <img src={pokemon.sprites.front_default} alt="" />
      </div>

      <div className="d-flex align-self-start mx-2 my-1 gap-1">
        {pokemon.types.map((type, index) => (
          <p
            key={index}
            className=""
            style={{
              textTransform: "capitalize",
              padding: "5px",
              fontSize: "10px",
              background: "#ffffff56",
              borderRadius: "10px",
            }}
          >
            {type.type.name}
          </p>
        ))}
      </div>
    </div>
  );
};
export default CardPokemon;
