<!--
Component that retrieves data about the owner of the website from firebase and then displays it
-->
<template>
  <div class="about">
    <b-container>
        <b-row align-h="center">
          <h1>{{owner.header}}</h1>
        </b-row>
        <b-row align-h="center" style="margin: 1rem 0;">
          <b-img :v-if="owner.image != ''" rounded="circle" :src="owner.image" style="max-width: 14rem; width: 14rem; height: 14rem; max-height: 14rem;"/>
        </b-row>
        <b-row align-h="center">
          <h2>{{owner.name}}</h2>
        </b-row>
        <b-row align-h="center">{{owner.bio}}</b-row>
        <b-row  align-h="center">
          <!-- Displays all social media links -->
          <b-button varian="secondary" v-for="(s, i) in owner.social" :key="i" variant="link" @click="openLinkInNewTab(s.link)" class="social-btn"><icon scale="1.5" :name="s.icon"></icon></b-button>
        </b-row>
        <b-row  align-h="center">
          <h3 :v-if="owner.cv && owner.cv.length > 0">Curiculum Vitae</h3>
        </b-row>
        <b-row  align-h="center">
          <!-- Displays all links to view or download your cv -->
          <b-button varian="secondary" v-for="(s, i) in owner.cv" :key="i" variant="link" @click="openLinkInNewTab(s.link)" class="social-btn"><icon scale="1.5" :name="s.icon"></icon></b-button>
        </b-row>
    </b-container>
  </div>
</template>

<script>
import { db } from '../main.js'

export default {
  name: 'Projects',
  data () {
    return {
      owner: {}
    }
  },
  // Load data from firestore
  firestore () {
    return {
      owner: db.collection('contents').doc('owner')
    }
  },
  watch: {
    owner: function (oldData, newData) {
      if (newData !== {}) {
        console.log('Data loaded!')
        this.$emit('loaded')
      }
    }
  },
  methods: {
    // Opens link in a new tab
    openLinkInNewTab (link) {
      window.open(link, '_blank')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.about {
  padding-bottom: 8rem;
  padding-top: 1rem;
  background: -moz-linear-gradient(
    top,
    rgba(14, 14, 14, 1) 0%,
    rgba(110, 111, 110, 1) 86%,
    rgba(125, 126, 125, 0.07) 90%,
    rgba(125, 126, 125, 0) 93%
  );
  background: -webkit-linear-gradient(
    top,
    rgba(14, 14, 14, 1) 0%,
    rgba(110, 111, 110, 1) 86%,
    rgba(125, 126, 125, 0.07) 90%,
    rgba(125, 126, 125, 0) 93%
  );
  background: linear-gradient(
    to bottom,
    rgba(14, 14, 14, 1) 0%,
    rgba(110, 111, 110, 1) 86%,
    rgba(125, 126, 125, 0.07) 90%,
    rgba(125, 126, 125, 0) 93%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#0e0e0e', endColorstr='#007d7e7d',GradientType=0 );
  color: lightgray;
}
.social-btn {
  color: lightgray;
}
.social-btn:hover {
  color: gray;
}
h1,
h2 {
  font-weight: normal;
}
h1,
h2,
a {
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
