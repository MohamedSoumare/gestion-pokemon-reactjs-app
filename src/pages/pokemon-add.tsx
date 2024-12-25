import React, { FunctionComponent, useState } from 'react';
import PokemonForm from '../components/pokemon-form';
import Pokemon from '../models/pokemon';
 
const PokemonAdd: FunctionComponent = () => {

    const [id] = useState<number>(new Date().getTime()); //Crée(genere) un ID unique en utilisant le timestamp actuel (nombre de millisecondes depuis 1970)
    const [pokemon] = useState<Pokemon>(new Pokemon(id));//Crée un nouvel objet Pokémon avec l'ID généré et new Pokemon(id) crée une instance vierge d'un Pokémon avec juste l'ID
   
  return (
    <div className="row">
      <h2 className="header center">Ajouter un pokémon</h2>
      <PokemonForm pokemon={pokemon} isEditForm={false}></PokemonForm>
    </div>
  );
}
 
export default PokemonAdd;