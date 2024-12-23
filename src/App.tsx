import { FunctionComponent } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PokemonsList from './pages/pokemon-list';
import PokemonsDetail from './pages/pokemon-detail';
import PageNotFound from './pages/page-not-found';
import PokemonEdit from './pages/pokemon-edit';
import PokemonAdd from './pages/pokemon-add';
import Login from './pages/login';
import PrivateRoute from './PrivateRoute';


const App: FunctionComponent = () => {
  return (
    <Router>
      <div>
        <nav>
          <div className="nav-wrapper teal">
            <Link to="/" className="brand-logo center">Pokédex</Link>
          </div>
        </nav>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<PrivateRoute><PokemonsList /></PrivateRoute>} />
          <Route path="/pokemons" element={<PrivateRoute><PokemonsList /></PrivateRoute>} />
          <Route path="/pokemons/:id" element={<PrivateRoute><PokemonsDetail /></PrivateRoute>} />
          <Route path="/pokemon/add" element={<PrivateRoute><PokemonAdd /></PrivateRoute>} />
          <Route path="/pokemons/edit/:id" element={<PrivateRoute><PokemonEdit /></PrivateRoute>} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
