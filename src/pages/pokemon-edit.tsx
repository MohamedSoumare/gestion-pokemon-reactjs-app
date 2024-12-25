import React, { FunctionComponent, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PokemonForm from '../components/pokemon-form';
import Pokemon from '../models/pokemon';
import PokemonService from '../services/pokemon-service';
import Loader from '../components/loader';


type Params = { id: string }; //un type pour les paramètres d'URL attendus (l'id du Pokémon)

const PokemonEdit: FunctionComponent = () => {
  const { id } = useParams<Params>(); //Utilise le hook useParams de react-router pour récupérer l'id du Pokémon depuis l'URL

  const [pokemon, setPokemon] = useState<Pokemon | null>(null);//Crée un état pokemon qui peut être soit un objet Pokemon soit null et initialisé à null en attendant le chargement des données

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
      {pokemon ? (//Si le Pokémon est chargé (pokemon n'est pas null)
        <div className="row">
            {/* Affiche un titre avec le nom du Pokémon */}
          <h2 className="header center">Éditer {pokemon.name}</h2> 
          {/* Affiche le formulaire d'édition avec les données du Pokémon */}
          <PokemonForm pokemon={pokemon} isEditForm={true}></PokemonForm>
        </div>
      ) : (
        //Si le Pokémon n'est pas chargé (pokemon est null)
        <h4 className="center"><Loader /></h4>
      )}
    </div>
  );
};

export default PokemonEdit;
