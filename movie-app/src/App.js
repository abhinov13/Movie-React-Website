import './App.css';
import { useState, useEffect, useRef } from "react";
import MoviePoster from './Component/MoviePoster';
import 'bootstrap/dist/css/bootstrap.css';



function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [favourites, setFavourites] = useState([]);
  const searchInput = useRef();

  const fetchMovies = async () => {
    const getReq = `http://www.omdbapi.com/?s=${search}&apikey=7f7ea64d`;
    const response = await fetch(getReq);
    const responseJson = await response.json();
    if (responseJson.Search)
      setMovies(responseJson.Search);
  }

  const processFavourite = (movie) => {
    if (favourites.includes(movie) == false) {
      setFavourites([...favourites, movie]);
    }
    else {
      const newFav = [...favourites];
      newFav.splice(favourites.indexOf(movie), 1);
      setFavourites(newFav);
    }
  }

  useEffect(
    () => {
      fetchMovies();
    }, [search]
  );

  function doSearch() {
    setSearch(searchInput.current.value);
  }
  return (
    <div className="App">

      <nav className='navbar navbar-dark bg-dark'>
        <span className='navbar-brand'>
          <img src="filmLogo.png" height="30" width="30" className="d-inline-block align-top Logo" />
          Movie Title
        </span>
        <div className="form-inline SearchSection">
          <div className='input-group'>
            <input ref={searchInput} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" onClick={doSearch}>Search</button>
          </div>
        </div>
      </nav>

      <div className='.d-flex flex-column align-items-center'>
        <div className='p-1'>
          <MoviePoster movies={movies} favouriteHandler={processFavourite}></MoviePoster>
        </div>
      </div>
      <div className='Poster-container Favourites-container'>
        <MoviePoster movies={favourites} favouriteHandler={processFavourite}></MoviePoster>
      </div>

    </div>
  );
}

export default App;
