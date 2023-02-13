import './App.css';
import { useState, useEffect, useRef } from "react";
import MoviePoster from './Component/MoviePoster';
import 'bootstrap/dist/css/bootstrap.css';



function App() {

  const [favourites, setFavourites] = useState([
    {
      "Title": "Captain America: The First Avenger",
      "Year": "2011",
      "imdbID": "tt0458339",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTYzOTc2NzU3N15BMl5BanBnXkFtZTcwNjY3MDE3NQ@@._V1_SX300.jpg"
    },
    {
      "Title": "The Toxic Avenger",
      "Year": "1984",
      "imdbID": "tt0090190",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNzViNmQ5MTYtMmI4Yy00N2Y2LTg4NWUtYWU3MThkMTVjNjk3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    },
    {
      "Title": "The Toxic Avenger Part II",
      "Year": "1989",
      "imdbID": "tt0098503",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BODhiNTljYTctMmIzZC00ZGVkLTk2NmItN2RjMzY3ZTYyNDczXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    },
    {
      "Title": "Citizen Toxie: The Toxic Avenger IV",
      "Year": "2000",
      "imdbID": "tt0212879",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMWI0NWY0ODUtNGY3Yy00ZDU1LTllYjUtMDFkYWEzZGQwY2I1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    },
    {
      "Title": "The Toxic Avenger Part III: The Last Temptation of Toxie",
      "Year": "1989",
      "imdbID": "tt0098502",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNjVlNzFjMGItMTEwYy00OTc0LWFmY2ItM2U0MmQyYWI5Njk3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    },
    {
      "Title": "Avenger",
      "Year": "2006",
      "imdbID": "tt0473445",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTMzMjMwMjcyNl5BMl5BanBnXkFtZTcwNTA1NDgzMQ@@._V1_SX300.jpg"
    },
    {
      "Title": "Knives of the Avenger",
      "Year": "1966",
      "imdbID": "tt0059045",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNzcxYjhjMDAtZmY4Yi00NmJlLTg4NDItNDBmYzljYzA3MmJmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg"
    },
    {
      "Title": "Samurai Avenger: The Blind Wolf",
      "Year": "2009",
      "imdbID": "tt1243972",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTAwNjc4MTkyNjBeQTJeQWpwZ15BbWU3MDg3NTQyMzI@._V1_SX300.jpg"
    },
    {
      "Title": "The Avenger",
      "Year": "1962",
      "imdbID": "tt0056174",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjNmOTEzN2YtYTcyMC00NDQ1LTg5NTMtMjQ3M2ZlOGU2YmFkXkEyXkFqcGdeQXVyMzg1ODEwNQ@@._V1_SX300.jpg"
    },
    {
      "Title": "The Avenger",
      "Year": "1960",
      "imdbID": "tt0054257",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNzU5YzM3MmEtNTE2MS00MzVjLWI5Y2EtNGU3M2YwMGYzMGQ0XkEyXkFqcGdeQXVyMDExMzA0Mw@@._V1_SX300.jpg"
    }
  ]);

  const [movies, setMovies] = useState([
    {
      "Title": "Captain America: The First Avenger",
      "Year": "2011",
      "imdbID": "tt0458339",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTYzOTc2NzU3N15BMl5BanBnXkFtZTcwNjY3MDE3NQ@@._V1_SX300.jpg"
    },
    {
      "Title": "The Toxic Avenger",
      "Year": "1984",
      "imdbID": "tt0090190",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNzViNmQ5MTYtMmI4Yy00N2Y2LTg4NWUtYWU3MThkMTVjNjk3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    },
    {
      "Title": "The Toxic Avenger Part II",
      "Year": "1989",
      "imdbID": "tt0098503",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BODhiNTljYTctMmIzZC00ZGVkLTk2NmItN2RjMzY3ZTYyNDczXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    },
    {
      " Title": "Citizen Toxie: The Toxic Avenger IV",
      "Year": "2000",
      "imdbID": "tt0212879",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMWI0NWY0ODUtNGY3Yy00ZDU1LTllYjUtMDFkYWEzZGQwY2I1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    },
    {
      "Title": "The Toxic Avenger Part III: The Last Temptation of Toxie",
      "Year": "1989",
      "imdbID": "tt0098502",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNjVlNzFjMGItMTEwYy00OTc0LWFmY2ItM2U0MmQyYWI5Njk3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    },
    {
      "Title": "Avenger",
      "Year": "2006",
      "imdbID": "tt0473445",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTMzMjMwMjcyNl5BMl5BanBnXkFtZTcwNTA1NDgzMQ@@._V1_SX300.jpg"
    },
    {
      "Title": "Knives of the Avenger",
      "Year": "1966",
      "imdbID": "tt0059045",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNzcxYjhjMDAtZmY4Yi00NmJlLTg4NDItNDBmYzljYzA3MmJmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg"
    },
    {
      "Title": "Samurai Avenger: The Blind Wolf",
      "Year": "2009",
      "imdbID": "tt1243972",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTAwNjc4MTkyNjBeQTJeQWpwZ15BbWU3MDg3NTQyMzI@._V1_SX300.jpg"
    },
    {
      "Title": "The Avenger",
      "Year": "1962",
      "imdbID": "tt0056174",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjNmOTEzN2YtYTcyMC00NDQ1LTg5NTMtMjQ3M2ZlOGU2YmFkXkEyXkFqcGdeQXVyMzg1ODEwNQ@@._V1_SX300.jpg"
    },
    {
      "Title": "The Avenger",
      "Year": "1960",
      "imdbID": "tt0054257",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNzU5YzM3MmEtNTE2MS00MzVjLWI5Y2EtNGU3M2YwMGYzMGQ0XkEyXkFqcGdeQXVyMDExMzA0Mw@@._V1_SX300.jpg"
    }
  ]);
  const [search, setSearch] = useState('');
  const [poster,setPoster] = useState('');

  const searchInput = useRef();

  const fetchMovies = async () => {
    const getReq = `http://www.omdbapi.com/?s=${search}&apikey=7f7ea64d`;
    console.log(getReq);
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

  const updateBackground = (poster) =>
  {
    setPoster(poster);
  }

  useEffect(
    () =>
    {
      console.log("fre effect " + poster);

    },[poster]
  )

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
          <img src="filmLogo.png" height="30" width="30" className="d-inline-block align-top Logo" />
          Movie Title
        </span>
        <div className="form-inline SearchSection">
          <div className='input-group'>
            <input ref={searchInput} className="form-control" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-success my-2 my-sm-0" onClick={doSearch}>Search</button>
          </div>
        </div>
      </nav>
      <div className='Movie-container'>
        <MoviePoster movies={movies} favourites={favourites} favouriteHandler={processFavourite} updateBackground={updateBackground}></MoviePoster>
      </div>
      <div className='Favourites-container'>
        <MoviePoster movies={favourites} favourites={favourites} favouriteHandler={processFavourite} updateBackground={updateBackground}></MoviePoster>
      </div>
    </div>
  );
}

export default App;
