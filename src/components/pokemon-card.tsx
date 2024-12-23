import { FunctionComponent, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Remplace useHistory
import Pokemon from '../models/pokemon';
import './card-pokomon.css';
import formatDate from '../helpers/format-date';
import formatType from '../helpers/format-type';

type Props = {
  pokemon: Pokemon;
  borderColor?: string;
};

const PokemonCard: FunctionComponent<Props> = ({ pokemon, borderColor = '#009688' }) => {
  const [color, setColor] = useState<string>();
  const navigate = useNavigate(); // Utilisation de useNavigate

  const showBorder = () => {
    setColor(borderColor);
  };

  const hideBorder = () => {
    setColor('#f5f5f5'); // Met la bordure en gris
  };

  const goToPokemon = (id: number) => {
    navigate(`/pokemons/${id}`); // Utilisation de navigate
  };

  return (
    <div
      className="col s6 m4"
      onMouseEnter={showBorder}
      onMouseLeave={hideBorder}
      onClick={() => goToPokemon(pokemon.id)} // Ajout de l'action de clic pour naviguer
    >
      <div className="card horizontal" style={{ borderColor: color }}>
        <div className="card-image">
          <img src={pokemon.picture} alt={pokemon.name} />
        </div>
        <div className="card-stacked">
          <div className="card-content">
            <p>{pokemon.name}</p>
            <p>
              <small>{formatDate(pokemon.created)}</small>
            </p>
            {pokemon.types.map((type) => (
              <span key={type} className={formatType(type)}>
                {type}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
