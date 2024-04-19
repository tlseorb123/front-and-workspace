<template>
  <div>
    <h1>영화 정보 추가</h1>
    <input type="text" v-model="movie.title" placeholder="영화 제목 입력" />
    <input type="text" v-model="movie.genre" placeholder="영화 장르 입력" />
    <input type="text" v-model="movie.actor" placeholder="영화 배우들 입력" />
    <button @click="sendMovie">영화 추가</button>
  </div>
</template>
<script>
export default {
  name: "CreatePage",
  data() {
    return {
      movie: {
        title: "",
        genre: "",
        actor: "",
      },
    };
  },
  methods: {
    async sendMovie() {
      await this.$store.dispatch("insertMovie", this.movie);
      this.movie = { title: "", genre: "", actor: "" };
      this.$router.push("/");
    },
  },
};
</script>

<style scoped lang="scss">
div {
  width: 900px;
  margin: auto;

  h1 {
    font-size: 2.5rem;
    font-weight: bold;
    margin-top: 30px;
    margin-bottom: 30px;
    text-align: center;
  }

  input {
    width: 100%;
    margin: 5px;
    padding: 5px;
    box-sizing: border-box;
  }
  button {
    margin: 5px;
    width: 100%;
    background: black;
    color: white;
    padding: 10px;
    cursor: pointer;
    font-weight: bold;
  }
}
</style>
