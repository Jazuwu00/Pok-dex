import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homescreen from "./screen/HomeScreen/Homescreen";
import PokemonDetail from "./screen/PokemonDetail/PokemonDetail";

export const MiRouter = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homescreen />} />
          <Route path="/Detail" element={<PokemonDetail />} />
        </Routes>
      </Router>
    </>
  );
};
