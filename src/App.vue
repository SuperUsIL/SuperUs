<template>
  <v-app>
    <Header/>
    <v-main>
      <router-view />
    </v-main>
    <Footer/>
  </v-app>
</template>

<script lang="ts">
import Header from './components/common/Header.vue'
import Footer from './components/common/Footer.vue'
export default {
  name: "app",
  components: {
    Header,
    Footer
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

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
