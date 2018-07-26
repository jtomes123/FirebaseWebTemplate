<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: rgba(110, 111, 110, 1);
}
.flex-centered-horizontal {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
html {
  background-color: rgba(14, 14, 14, 1);
}
</style>
