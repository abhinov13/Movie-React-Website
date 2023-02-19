import './App.css';
import { useState, useEffect, useRef } from "react";
import MoviePoster from './Component/MoviePoster';
import 'bootstrap/dist/css/bootstrap.css';



function App() {

  const [favourites, setFavourites] = useState([]);
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [poster,setPoster] = useState('');

  const searchInput = useRef();

  const fetchMovies = async () => {
    const getReq = `http://www.omdbapi.com/?s=${search}&apikey=7f7ea64d`;
    const response = await fetch(getReq);
    const responseJson = await response.json();
    if (responseJson.Search)
      setMovies(responseJson.Search);
  }

  const addToLocal = () =>
  {
    localStorage.setItem("favmovielist",JSON.stringify(favourites));
  }

  useEffect(
    () =>
    {
      const p =JSON.parse(localStorage.getItem("favmovielist"));
      setFavourites(p);
      setSearch("fast");
    },[]
  )



  const processFavourite = (movie) => {
    console.log(movie);
    if (favourites.includes(movie) == false) {
      setFavourites([...favourites, movie]);
    }
    else {
      const newFav = [...favourites];
      newFav.splice(favourites.indexOf(movie), 1);
      setFavourites(newFav);
    }
  }
  const executed = useRef(false);
  useEffect(
    () =>
    {
      if(executed.current == false)
      {
        executed.current = true;
      }
      else
      {
        addToLocal();
      }
      
    },[favourites]
  )

  const updateBackground = (poster) =>
  {
    if(poster != "N/A")
    setPoster(poster);
  }

  const resetBackground = () =>
  {
    setPoster("https://images.pling.com/img/00/00/59/97/06/1588502/0448be61263aa99d9f2e221bb434d120a2c7ebb00917c9e583886c32bb1025dd3da2.jpg");
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
    <div className="App user-select-none">
      <div className='backgroundImg' style={{backgroundImage: 'url('+poster+')'}}></div>
      <nav className='navbar navbar-dark customNav'>
        <span className='navbar-brand'>
          <img src="logo.svg" height="30" width="30" className="d-inline-block align-top Logo" />
          _Movie Rating__
        </span>
        <div className="form-inline SearchSection">
          <div className='input-group'>
            <input ref={searchInput} className="form-control" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-success my-2 my-sm-0" onClick={doSearch}>Search</button>
          </div>
        </div>
      </nav>
      <div className='Movie-container'>
        <MoviePoster movies={movies} favourites={favourites} favouriteHandler={processFavourite} updateBackground={updateBackground} resetBackground={resetBackground}></MoviePoster>
      </div>
      <div className='FavTitle'>
        Favourites
      </div>
      <div className='Favourites-container'>
        <MoviePoster movies={favourites} favourites={favourites} favouriteHandler={processFavourite} updateBackground={updateBackground} resetBackground={resetBackground}></MoviePoster>
      </div>
    </div>
  );
}

export default App;
