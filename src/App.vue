<template>
  <div id="app">
    <Props />
  </div>
</template>

<script>
import Props from "./components/Props.vue";

export default {
  name: "App",
  components: {
    Props,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
html,
body,
#app {
  min-height: 100%;
}
#app {
  background: #f5f5f5;

  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
Counter {
  background: #2c3e50;
}
</style>
