import axios from "axios";

const requestInstance = () => {
  return axios.create({
    baseURL: "https://api.themoviedb.org/3/",
  });
};

const getRequest = ({ path, query = "" }) => {
  const url = `${path}?api_key=0b64d968a31f60b80f3e5f14b7b86b95&language=en${query}`;

  return requestInstance().get(url);
};

const searchMovies = (params) => {
  const query = `&query=${params}&include_adult=false`;
  const path = "search/movie/";
  return getRequest({ path, query });
};

const getPopularMovies = () => {
  const path = "/movie/popular";
  return getRequest({ path });
};

export default {
  getPopularMovies,
  searchMovies,
};
