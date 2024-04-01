import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import AllCards from "../../components/AllCards";
import PickElement from "../../components/Filter";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { fetchAllPokemons } from "../../store/reducers/pokemonReducer";
import { fetchPokemonsByType } from "../../store/reducers/pokemonByType";

const HomeScreen = () => {
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const handleTypeChange = (type: string) => {
    setSelectedType(type);
  };

  const dispatch = useDispatch<AppDispatch>();

  const { pokemons, loading, error } = useSelector((state: RootState) =>
    selectedType !== null && selectedType !== "all"
      ? state.pokemonList
      : state.allPokemon
  );

  useEffect(() => {
    console.log(selectedType);
    if (selectedType !== null && selectedType !== "all") {
      dispatch(fetchPokemonsByType(selectedType));
    } else {
      dispatch(fetchAllPokemons());
    }
  }, [dispatch, selectedType]);

  return (
    <div>
      <Header />
      <PickElement onSelectType={handleTypeChange} />
      {pokemons && (
        <AllCards pokemons={pokemons} loading={loading} error={error} />
      )}
    </div>
  );
};

export default HomeScreen;
