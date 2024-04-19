import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080/api/",
});

// 목록
export const getMovies = async () => {
  return await instance.get("movie");
};

// 추가
export const addMovie = async (data) => {
  return await instance.post("movie", data);
};

// 삭제
export const delMovie = async (no) => {
  return await instance.delete("movie/" + no);
};
