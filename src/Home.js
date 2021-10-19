import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import SearchBar from "./components/SearchBar/SearchBar";
import MovieList from "./components/MovieList/MovieList";
import Navbar from "./components/Navbar/Navbar";
import ToastWithLink from "./components/Toast/Toast";

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

  const getList = (list) => {
    switch (list) {
      case "favorites":
        return [favoriteMovies, setFavoriteMovies, "favorites"];
      case "watchLater":
        return [watchLaterList, setWatchLaterList, "watch later"];
      // case "playlist":
      default:
        break;
    }
  };

  const handleList = (listName, movie) => {
    const [list, setList, toastText] = getList(listName);
    let msg = `Added to ${toastText}. `;

    if (!isInList(listName, movie)) {
      setList([...list, movie]);
    } else {
      setList(list.filter((fav) => fav !== movie));
      msg = `Removed from ${toastText}. `;
    }

    toast.info(<ToastWithLink msg={msg} path={`/${listName}`} />);
  };

  const isInList = (listName, movie) => {
    const [list] = getList(listName);

    return !!list.find((mov) => mov.id === movie.id);
  };

  return (
    <Router>
      <Route component={Navbar} />
      <div>
        <Switch>
          <Route exact path="/">
            <SearchBar
              onSearch={(value) => {
                setTerm(value);
              }}
            />
            <MovieList
              movies={movies}
              isInList={isInList}
              handleList={handleList}
            />
          </Route>
          <Route path="/favorites">
            <MovieList
              title="Favorites"
              isInList={isInList}
              handleList={handleList}
              movies={favoriteMovies}
            />
          </Route>
          <Route path="/watchLater">
            <MovieList
              title="Watch Later"
              isInList={isInList}
              handleList={handleList}
              movies={watchLaterList}
            />
          </Route>
        </Switch>
      </div>
      <ToastContainer position="bottom-right" />
    </Router>
  );
};

export default Home;
