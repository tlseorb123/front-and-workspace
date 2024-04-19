<template>자식에서 보여줌 : {{ data }}</template>

<script>
export default {
  name: "InfoComponent",
  props: {
    data: Object,
  },
  data() {
    return {
      childMessage: "하위 컴포넌트에서 상위 컴포넌트로!",
    };
  },
  created() {
    this.sendParent();
  },
  methods: {
    sendParent() {
      this.$emit("child", this.childMessage);
    },
  },
};
</script>

<style></style>
