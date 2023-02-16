import React from "react";

const MoviePoster = (props) => {
    return (<>
        <div className="d-flex flex-row h-100 Poster-container">
            {props.movies.map(
                (movie) => (
                    <div className="mt-3 mx-3 Poster-border" onMouseEnter={() => props.updateBackground(movie.Poster)} onMouseLeave={() => { props.resetBackground() }}>

                        <div className="Poster">
                            <a href={"https://www.imdb.com/title/" + movie.imdbID + "/"} target="_blank" >
                                <img src={movie.Poster} className="PosterImage h-100" />
                            </a>
                            <div className='Favourites w-100'>
                                <div className="WrapLike" onClick={() => props.favouriteHandler(movie)}>
                                    {
                                        props.favourites.includes(movie) ?
                                            <>
                                                <img src="heart-fill-red.svg" className="LikeImg" />
                                                <span className="Like"> Add to Favourites</span>
                                            </>
                                            :
                                            <>
                                                <img src="heart-fill-blue.svg" className="LikeImg" />
                                                <span className="Like"> Add to Favourites</span>
                                            </>
                                    }
                                </div>
                            </div>
                        </div>

                        <div className="MovieInfo">
                        </div>
                    </div>
                )
            )}
        </div>
    </>);
}

export default MoviePoster;