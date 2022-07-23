import './App.css';
import Menu from './Menu';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MoviesListMain from './movies/MoviesListMain';
import IndexGenres from './genres/IndexGenres';
import CreateGenre from './genres/CreateGenre';
import EditGenre from './genres/EditGenre';
import CreateActor from './actors/CreateActor';
import EditActor from './actors/EditActor';
import IndexActors from './actors/IndexActors';
import IndexMovieTheathers from './movietheathers/IndexMovieTheathers';
import CreateMovietheather from './movietheathers/CreateMovieTheather';
import EditMovietheather from './movietheathers/EditMovieTheather';
import CreateMovie from './movies/CreateMovie';
import EditMovie from './movies/EditMovie';
import FilterMovies from './movies/FilterMovies';
import RedirectToLandingPage from './utils/RedirectToLandingPage';

 
function App() {

  

  return (

    <BrowserRouter>
      <Menu />
      <div className='container'>
        <Routes> 
          <Route  path='/' element={<MoviesListMain/>} />
          
          <Route  path='/genres' element={<IndexGenres/>} />
            <Route  path='/genres/create' element={<CreateGenre/>} />
            <Route  path='/genres/edit/:id1(\\d+)' element={<EditGenre/>} />
          
          <Route  path='/movies/filter' element={<FilterMovies/>} />

          <Route  path='//movietheathers' element={<IndexMovieTheathers/>} />
            <Route  path='//movietheathers/create' element={<CreateMovietheather/>} />
            <Route  path='//movietheathers/edit/:id(\\d+)' element={<EditMovietheather/>} />

          <Route  path='/actors' element={<IndexActors/>} />
            <Route  path='/actors/create' element={<CreateActor/>} />
            <Route  path='/actors/edit/:id(\\d+)' element={<EditActor/>} />
          
            <Route  path='/movies/create' element={<CreateMovie/>} />
            <Route  path='/amovies/edit/:id(\\d+)' element={<EditMovie/>} />
          
            {/* chemin qui n'existe pas */}
            <Route  path='*' element={<RedirectToLandingPage/>} />
            

        </Routes>
          
      </div>

    </BrowserRouter>
  );
}

export default App;
