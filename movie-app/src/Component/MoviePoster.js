import React from "react";

const MoviePoster = (props) => {
    return (<>
        {props.movies.map(
            (movie) => (
                <div className="Poster">
                    <img src={movie.Poster} className="PosterImage" onError={(target)=>{
                        target.onError = null;
                        target.src = "movie-fill.svg";
                    }}></img>
                    <div className='Favourites'>
                        <div className="WrapLike">
                            <img src="heart-fill-blue.svg" className="LikeImg" onClick={() => props.favouriteHandler(movie)}/><div className="Like"> Add to Favourites</div>
                        </div>
                    </div>
                </div>
            )
        )}</>);
}

export default MoviePoster;
