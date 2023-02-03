import './App.css';
import { useState,useEffect } from "react";
import MoviePoster from './Component/MoviePoster';



function App() {
  const [movies,setMovies] = useState([]);
  const [search,setSearch] = useState('');
  const fetchMovies = async () =>
  {
    const getReq = `http://www.omdbapi.com/?s=${search}&apikey=7f7ea64d`;
    console.log(getReq);
    const response = await fetch(getReq);
    const responseJson = await response.json();
    if(responseJson.Search)
    setMovies(responseJson.Search);
  }

  useEffect(
    () =>
    {
      fetchMovies();
    },[search]
  );

  return (
    <div className="App">
      <div className='Header'>
        <div className='logo-container'>
        <img src='filmLogo.png' className='logo'/> <div className='movieTitle'>Movie Title</div>
        </div>
        <input className='searchBox' type="text" placeholder='Search...' onChange={(event) => setSearch(event.target.value)}/>
      </div>
      <div className='Poster-container'>
      <MoviePoster movies = {movies}></MoviePoster>
      </div>
    </div>
  );
}

export default App;
