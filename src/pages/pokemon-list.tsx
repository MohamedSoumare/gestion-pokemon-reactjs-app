import { FunctionComponent, useState, useEffect } from 'react';
import Pokemon from '../models/pokemon';
import PokemonService from '../services/pokemon-service';
import PokemonCard from '../components/pokemon-card';
import { Link } from 'react-router-dom';
import PokemonSearch from '../components/pokemon-search';

const PokemonList: FunctionComponent = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]); //Crée un état pokemons initialisé comme un tableau vide
  
  useEffect(() => {
    // setPokemons(POKEMONS);
    // fetch('http://localhost:3001/pokemons')
    // .then(response => response.json())
    // .then((pokemons) => {
    //  setPokemons(pokemons);
    // });
    PokemonService.getPokemons().then(pokemons => setPokemons(pokemons));
  }, []);//S'exécute une seule fois au montage du composant (grâce au tableau de dépendances vide [])
  
  return (
    <div>
      <h1 className="center">Pokédex</h1>
      <div className="container"> 
        <div className="row"> 
          <PokemonSearch />
        {pokemons.map(pokemon => (//Utilise map pour afficher un PokemonCard pour chaque Pokémon
        //   <PokemonCard key={pokemon.id} pokemon={pokemon} borderColor="red"/>
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
        </div>
      </div>
      <Link className="btn-floating btn-large waves-effect waves-light red z-depth-3"
        style={{position: 'fixed', bottom: '25px', right: '25px'}}
        to="/pokemon/add">
        <i className="material-icons">add</i>
      </Link>
    </div> 
  );
}
  
export default PokemonList;