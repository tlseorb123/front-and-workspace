<template>
  <div id="app">
    <Header />
    <router-link to="/">메인페이지</router-link>
    <router-link to="/about">게시판</router-link>
    <router-link to="/profile">나의 프로필</router-link>
    <router-view />
    <Footer />
  </div>
</template>

<script>
import { Headerpage } from "./components/common/Header.vue";
import { Footerpage } from "./components/common/Footer.vue";

export default {
  name: "App",
  components: {
    Headerpage,
    Footerpage,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
