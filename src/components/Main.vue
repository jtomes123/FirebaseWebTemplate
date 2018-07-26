<!--
The main component that displays everything
-->
<template>
  <div>
    <p-about v-on:loaded="aboutLoaded = true"></p-about>
    <p-projects v-on:loaded="projectsLoaded = true"></p-projects>
    <p-contact v-on:loaded="contactLoaded = true"></p-contact>
    <div v-if="aboutLoaded == false || projectsLoaded == false || contactLoaded == false" class="loading-screen">
      <icon name="spinner" pulse scale="3" style="margin: auto"></icon>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Main',
  data () {
    return {
      aboutLoaded: false,
      projectsLoaded: false,
      contactLoaded: false
    }
  },
  firestore () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.loading-screen {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: gray;
}
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
