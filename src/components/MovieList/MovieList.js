import "./MovieList.css";
import React from "react";
import Icon from "../Icon/Icon";

const MovieList = ({
  title,
  movies,
  isInList,
  handleList,
  emptyText = "Nothing to find here.",
}) => {
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
          <div className="movie-title">{movie.original_title}</div>
          <hr />
          <div>
            <Icon
              iconName={
                isInList("favorites", movie) ? "favorite" : "favorite_border"
              }
              onClickHandler={(e) => handleList("favorites", movie)}
            />
            <Icon
              iconName={
                isInList("watchLater", movie) ? "watch_later" : "schedule"
              }
              onClickHandler={(e) => handleList("watchLater", movie)}
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="list-title">
        
      </div>
      <div className="movie-list">
        {movies && movies.length > 0 ? (
          movies.map(renderMovieList)
        ) : (
          <div className="empty-list">{emptyText}</div>
        )}
      </div>
    </>
  );
};

export default MovieList;
