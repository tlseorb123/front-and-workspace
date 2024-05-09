import axios from "axios";

export const getMovies = async () => {
  return await axios.get("http://localhost:8080/api/movie");
};

export const addMovie = async (data) => {
  return await axios.post("http://localhost:8080/api/movie", data);
};

export const delMovie = async (no) => {
  return await axios.delete("http://localhost:8080/api/movie/" + no);
};

export const getMovie = async (no) => {
  return await axios.get("http://localhost:8080/api/movie/" + no);
};
export const UpMovie = async () => {
  return await axios.put("http://localhost:8080/api/movie/");
};
