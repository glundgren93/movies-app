import "material-design-icons/iconfont/material-icons.css";
import React, { useState } from "react";

const MovieList = ({ movies, handleFavorites }) => {
  const renderMovieImg = (moviePoster, width = 300) => {
    const moviePath = moviePoster
      ? `https://image.tmdb.org/t/p/w${width}/${moviePoster}`
      : `https://i2.wp.com/ultravires.ca/wp/wp-content/uploads/2018/03/Then-and-Now_-no-image-found.jpg?w=${width}`;

    return moviePath;
  };

  const renderMovieList = (movie) => {
    return (
      <div key={movie.id} className="movie-item">
        <div className="movie-item-content">
          <div className="movie-image-wrap">
            <img
              className="movie-image"
              alt={`Poster for ${movie.original_title}`}
              src={renderMovieImg(movie.poster_path)}
            />

            <div className="movie-description-layer">
              <p className="movie-description">{movie.overview}</p>
            </div>
          </div>
          <div className="movie-title">{movie.original_title}</div>{" "}
          <i
            color="#fff"
            className="material-icons"
            onClick={(e) => handleFavorites(movie)}
          >
            star_border
          </i>
        </div>
      </div>
    );
  };

  return movies ? (
    <div className="movie-list"> {movies.map(renderMovieList)} </div>
  ) : null;
};

export default MovieList;
