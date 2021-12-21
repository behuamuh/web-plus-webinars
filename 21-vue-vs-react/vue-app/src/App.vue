<template>
  <div id="app">
    <RedBox> Hello in box! </RedBox>
    <HelloWorld msg="Welcome to Your Vue.js App!!!!" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import RedBox from "./components/RedBox.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    RedBox,
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
