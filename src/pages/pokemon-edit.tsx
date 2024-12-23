import React, { FunctionComponent, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PokemonForm from '../components/pokemon-form';
import Pokemon from '../models/pokemon';
import PokemonService from '../services/pokemon-service';
import Loader from '../components/loader';


type Params = { id: string };

const PokemonEdit: FunctionComponent = () => {
  const { id } = useParams<Params>();
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  useEffect(() => {
    // const foundPokemon = POKEMONS.find((pokemon) => pokemon.id.toString() === id);
    // setPokemon(foundPokemon || null);
    // fetch(`http://localhost:3001/pokemons/${id}`)
    // .then(response => response.json())
    // .then(pokemon => {
    //   if(pokemon.id) setPokemon(pokemon)
    // });
    if (id) {
            const numericId = parseInt(id, 10); // Convertit l'id en nombre
            PokemonService.getPokemon(numericId).then(pokemon => setPokemon(pokemon));
          }
  }, [id]);

  return (
    <div>
      {pokemon ? (
        <div className="row">
          <h2 className="header center">Éditer {pokemon.name}</h2>
          <PokemonForm pokemon={pokemon} isEditForm={true}></PokemonForm>
        </div>
      ) : (
        <h4 className="center"><Loader /></h4>
      )}
    </div>
  );
};

export default PokemonEdit;
