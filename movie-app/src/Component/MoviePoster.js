import React, { useEffect, useRef, useState } from "react";

const MoviePoster = (props) => {
    const titleList = useRef([]);
    titleList.current = props.favourites.map((movie) => movie.Title);

    return (<>
        <div className="h-100 Poster-container">
            {props.movies.map(
                (movie) => (
                    <div className="mx-4 Poster-border" onMouseEnter={() => props.updateBackground(movie.Poster)} onMouseLeave={() => { props.resetBackground() }}>

                        <div className="Poster">
                            <a href={"https://www.imdb.com/title/" + movie.imdbID + "/"} target="_blank" >
                                {
                                    movie.Poster == "N/A" ?
                                        <>
                                            <img src="notFound.svg" className="PosterImage" />
                                            <div className="MovieName">{movie.Title}</div>
                                        </>
                                        :
                                        <>
                                            <img src={movie.Poster} className="PosterImage" />

                                        </>

                                }
                            </a>
                            <div className='Favourites w-100' onClick={() => props.favouriteHandler(movie)}>
                                    {
                                        titleList.current.includes(movie.Title) ?
                                            <>
                                                <img src="heart-fill-red.svg" className="LikeImg" />
                                                
                                            </>
                                            :
                                            <>
                                                <img src="heart-fill-blue.svg" className="LikeImg" />
                                                
                                            </>
                                    }
                            </div>
                        </div>
                    </div>
                )
            )}
        </div>
    </>);
}

export default MoviePoster;