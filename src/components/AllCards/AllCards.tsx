import React from "react";
import CardPokemon from "../CardPokemon";
import { Pokemon } from "../../store/types/pokemonTypes";
import ReactLoading from "react-loading";
import Pagination from "../pagination";

interface Props {
  pokemons?: Pokemon[];
  loading: boolean;
  error: string | null;
}

const AllCards: React.FC<Props> = ({ pokemons = [], loading, error }) => {
  if (loading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center flex-column"
        style={{ minHeight: "50vh", gap: "100px" }}
      >
        <ReactLoading type={"spinningBubbles"} color={"#ffffff"} width={150} />
        <p
          className=" mt-3  "
          style={{
            fontSize: "3rem",
            color: "#ca333300",
            WebkitTextStroke: "1px #ffffff",
          }}
        >
          Cargando Datos....
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div
        className="d-flex  justify-content-center align-items-center flex-column"
        style={{ minHeight: "50vh", gap: "100px" }}
      >
        <p
          className=" "
          style={{
            fontSize: "3rem",
            color: "#ca333300",
            WebkitTextStroke: "1px #ffffff",
          }}
        >
          Error al cargar los datos.
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="d-flex flex-wrap mx-auto" style={{ width: "80%" }}>
        {pokemons.map((pokemon) => (
          <CardPokemon key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
      <div className="pt-5 ">
        <Pagination />
      </div>
    </div>
  );
};

export default AllCards;
