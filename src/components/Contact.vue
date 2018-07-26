<!--
Simple component that retrieves the contacts from firebase and displays them using v-for
-->
<template>
  <div class="contact">
    <b-container>
      <b-row align-h="center"><h2 :v-if="owner.contact && owner.contact.length > 0">Contact</h2></b-row>
      <b-row align-h="center">
        <b-button varian="secondary" v-for="(s, i) in owner.contact" :key="i" variant="link" @click="openLinkInNewTab(s.link)" class="social-btn"><icon scale="1.5" :name="s.icon"></icon></b-button>
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
      owner: []
    }
  },
  // Retrieve data from firebase
  firestore () {
    return {
      owner: db.collection('contents').doc('owner')
    }
  },
  watch: {
    owner: function (oldData, newData) {
      if (newData !== {}) {
        this.$emit('loaded')
      }
    }
  },
  methods: {
    // Open link in new tab
    openLinkInNewTab (link) {
      window.open(link, '_blank')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contact {
  color: whitesmoke;
  padding-top: 4rem;
  padding-bottom: 1rem;

  background: -moz-linear-gradient(
    bottom,
    rgba(14, 14, 14, 1) 0%,
    rgba(110, 111, 110, 1) 86%,
    rgba(125, 126, 125, 0.07) 90%,
    rgba(125, 126, 125, 0) 93%
  );
  background: -webkit-linear-gradient(
    bottom,
    rgba(14, 14, 14, 1) 0%,
    rgba(110, 111, 110, 1) 86%,
    rgba(125, 126, 125, 0.07) 90%,
    rgba(125, 126, 125, 0) 93%
  );
  background: linear-gradient(
    to top,
    rgba(14, 14, 14, 1) 0%,
    rgba(110, 111, 110, 1) 86%,
    rgba(125, 126, 125, 0.07) 90%,
    rgba(125, 126, 125, 0) 93%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#007d7e7d', endColorstr='#0e0e0e',GradientType=0 );
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
.social-btn {
  color: lightgray;
}
.social-btn:hover {
  color: gray;
}
</style>
