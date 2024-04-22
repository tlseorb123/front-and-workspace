import axios from "axios";

export const getMovies = async () => {
  return await axios.get("http://localhost:8080/api/movie");
};
export const addMovies = async (data) => {
  return await axios.post("http://localhost:8080/api/movie", data);
};
export const delMovies = async (no) => {
  return await axios.delete("http://localhost:8080/api/movie" + no);
};
