<template>
  <h1>영화 목록</h1>
  <table>
    <thead>
      <tr>
        <th>제목</th>
        <th>장르</th>
        <th>영화배우</th>
        <th>삭제</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="movie in movies" :key="movie.no">
        <td>{{ movie.title }}</td>
        <td>{{ movie.genre }}</td>
        <td>{{ movie.actor }}</td>
        <td><button @click="deleteMovie(movie.no)">삭제</button></td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  name: "HomePage",
  computed: {
    movies() {
      return this.$store.state.movie.movies;
    },
  },
  created() {
    this.$store.dispatch("fetchMovies");
  },
  methods: {
    deleteMovie(no) {
      this.$store.dispatch("deleteMovie", no);
    },
  },
};
</script>
<style scoped lang="scss">
h1 {
  font-size: 2.5rem;
  font-weight: bold;
  margin-top: 30px;
  margin-bottom: 30px;
  text-align: center;
}
table {
  width: 900px;
  margin: auto;
  text-align: center;
  th {
    width: 25%;
    font-weight: bold;
  }
  td {
    padding-top: 20px;
  }
}
</style>
