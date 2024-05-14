<template>
  <div id="app">
    <HeaderPage />
    <router-link to="/">메인페이지</router-link>
    <router-link to="/about">게시판</router-link>
    <router-link to="/profile">나의 프로필</router-link>
    <router-view />
    <FooterPage />
  </div>
</template>

<script>
import { HeaderPage } from "./components/common/HeaderPage.vue";
import { FooterPage } from "./components/common/FooterPage.vue";
import { HomePage } from "./views/HomePage.vue";

export default {
  name: "App",
  components: {
    HeaderPage,
    FooterPage,
    HomePage,
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
