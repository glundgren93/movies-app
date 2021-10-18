import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";
import axios from "axios";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [term, setTerm] = useState("");
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const [watchLaterList, setWatchLaterList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      if (term.length >= 3) {
        const result = await axios(
          `https://api.themoviedb.org/3/search/movie/?query=${term}&api_key=0b64d968a31f60b80f3e5f14b7b86b95`
        );
        setMovies(result.data.results);
      }
    }
    fetchData();
  }, [term]);

  const handleFavorites = (movie) => {
    if (!favoriteMovies.includes(movie)) {
      setFavoriteMovies([...favoriteMovies, movie]);
    }
  };

  console.log(favoriteMovies);

  return (
    <>
      <SearchBar
        onSearch={(value) => {
          setTerm(value);
        }}
      />
      <MovieList movies={movies} handleFavorites={handleFavorites} />
    </>
  );
};

export default Home;
