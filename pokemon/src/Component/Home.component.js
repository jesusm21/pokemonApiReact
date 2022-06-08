/** @format */

import axios from "axios";
import { useState } from "react";

const Home = () => {
  const [pokemon, setPokemon] = useState({});
  const [displayPokemon, setDisplayPokemon] = useState(false);

  let randomNumber = Math.floor(Math.random() * 100) + 1;

  const pokeDex = async () => {
    const res = await axios(
      `https://pokeapi.co/api/v2/pokemon/${randomNumber}`
    );
    setPokemon(res.data);
    setDisplayPokemon(true);
  };

  return (
    <div className="text-center mt-5 text-white text-capitalize ">
      <div
        style={{ borderRadius: 25 + "px" }}
        className="bg-dark  w-50 mx-auto p-5"
      >
        {displayPokemon ? (
          <>
            <h1>{pokemon.name}</h1>
            <img
              style={{ height: 200 + "px" }}
              src={pokemon.sprites.front_default}
              alt="pokemon"
            ></img>
            <ul className="p-0">
              {pokemon.stats.map((pokemonStats) => {
                return (
                  <li
                    className="w-50 mx-auto mt-3"
                    key={pokemonStats.stat.name}
                  >
                    {pokemonStats.stat.name}: {pokemonStats.base_stat}
                  </li>
                );
              })}
            </ul>
          </>
        ) : (
          <h1>Descubre algunos de los Pokémon! </h1>
        )}
      </div>

      <button className="btn btn-dark mt-5" onClick={pokeDex}>
        Mostrar Pokémon
      </button>
    </div>
  );
};

export default Home;
