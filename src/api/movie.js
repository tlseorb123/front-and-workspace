import axios from "axios";

export const getMovies = async () => {
  return await axios.post("http://localhost:8080/api/movie");
};

export const delMovies = async () => {
  return await axios.delete("http://localhost:8080/api/movie");
};

export const addMovies = async () => {
  return await axios.put("http://localhost:8080/api/movie");
};
