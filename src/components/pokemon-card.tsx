import{ FunctionComponent, useState } from 'react';
import Pokemon from '../models/pokemon';
import './card-pokomon.css';
import formatDate from '../helpers/format-date';
import formatType from '../helpers/format-type';

type Props = { // on declare (definie) le type du props pour notre pour notre fonction qui devrait passé en parametre
  pokemon: Pokemon,
  borderColor?: string
  };
  
const PokemonCard: FunctionComponent<Props> = ({pokemon, borderColor= '#009688'}) => {  // on définie notre fonction qui prend en paramètre un objet pokemon qui est lie a notre type Props
    const [color, setColor] = useState<string>();

    const showBorder = () => {
        setColor(borderColor)
    }
    const hideBorder = () =>{
        setColor('#f5f5f5')  // met la color en gris
    }
   
  return ( 
    <div className="col s6 m4" onMouseEnter = {showBorder} onMouseLeave={hideBorder}>
    <div className="card horizontal" style ={{ borderColor: color}}>
      <div className="card-image"> 
        <img src={pokemon.picture} alt={pokemon.name}/>
      </div>
      <div className="card-stacked">
        <div className="card-content">
          <p>{pokemon.name}</p>
          <p><small>{formatDate(pokemon.created)}</small></p>
          {/* <p><small>{pokemon.created.toLocaleDateString()}</small></p> */}
          {/* <p><small>{pokemon.created.toString()}</small></p> */}
          {pokemon.types.map(type =>(
            <span key ={type} className={formatType(type)}>{type}</span>
          ))}
        </div>
      </div>
    </div> 
  </div>
  );
}
  
export default PokemonCard;