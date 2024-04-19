import { getMovies, addMovie, delMovie } from "@/api/movie";

export default {
  state: {
    movies: [],
  },
  mutations: {
    setMovies(state, movies) {
      state.movies = movies;
    },
    addMovie(state, movie) {
      state.movies.push(movie);
    },
    removeMovie(state, no) {
      state.movies = state.movies.filter((movie) => movie.no !== no);
    },
  },
  actions: {
    async fetchMovies({ commit }) {
      const response = await getMovies();
      commit("setMovies", response.data);
    },
    async insertMovie({ commit }, data) {
      const response = await addMovie(data);
      commit("addMovie", response.data);
    },
    async deleteMovie({ commit }, no) {
      await delMovie(no);
      commit("removeMovie", no);
    },
  },
};