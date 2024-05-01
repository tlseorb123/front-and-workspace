<template>
  <PageHeader />
  <!-- 헤더 컴포넌트 -->
  <router-view />
  <!-- 페이지 이동이 표시될 곳 -->
  <PageFooter />
  <!-- 푸터 컴포넌트 -->
</template>

<script>
import PageFooter from "@/components/PageFooter.vue";
import PageHeader from "@/components/PageHeader.vue";

export default {
  name: "App",
  components: {
    PageHeader,
    PageFooter,
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
}
</style>
