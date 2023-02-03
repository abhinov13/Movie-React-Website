import React from "react";

const MoviePoster = (props) =>
{
    return (<>
    {props.movies.map(
        (movie) => (
                <div className="Poster">
                <img src = {movie.Poster} className = "PosterImage"></img>
                </div>
        )
    )}</>);
}

export default MoviePoster;
