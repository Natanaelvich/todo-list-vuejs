<template>
  <div id="app">
    <Dashboard />
  </div>
</template>

<script>
import Dashboard from "./pages/Dashboard/Dashboard";

export default {
  name: "App",
  components: {
    Dashboard,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}
html,
body,
#app {
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #f5f5f5;
  color: #2c3e50;
}
</style>
