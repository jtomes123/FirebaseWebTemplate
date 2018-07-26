<!--
This component loads projects from firebase and displays the using v-for and variables
-->

<template>
  <div>
    <h1>Projects</h1>
    <b-container v-if="projects.length > 0">
      <article v-for="(project, i) in projects" :key="i" style="margin: 1rem 0;" class="article-container">
        <b-row align-h="center">
          <b-card :title="project.name"
          :img-src="project.graphic"
          class="card">
            <p>{{project.description}}</p>
            <div class="links">
                <b-button style="margin: 0.5rem 1rem;" v-for="(store, j) in project.stores" :key="j" @click="openLinkInNewTab(store.link)"><span class="flex-centered-horizontal"><icon :name="store.icon" scale="2" style="margin-right: 1rem;"></icon>{{store.name}}</span></b-button>
            </div>
          </b-card>
        </b-row>
      </article>
    </b-container>
    <p v-if="projects.length < 1" style="color: whitesmoke">No projects to show yet</p>
  </div>
</template>

<script>
import { db } from '../main.js'

export default {
  name: 'Projects',
  data () {
    return {
      projects: []
    }
  },
  // Load data from firestore
  firestore () {
    return {
      projects: db.collection('projects')
    }
  },
  watch: {
    projects: function (oldData, newData) {
      if (newData !== {}) {
        this.$emit('loaded')
      }
    }
  },
  methods: {
    // Open a link in new tab
    openLinkInNewTab (link) {
      window.open(link, '_blank')
    }
  }
}
</script>

<style scoped>
.card {
  max-width: 48rem;
  width: 100%;
}
.links {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

h1,
h2 {
  font-weight: normal;
  color: whitesmoke;
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
