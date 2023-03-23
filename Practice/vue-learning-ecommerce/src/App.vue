<template>

    <NavBar />
    <!-- <h1>Two Trees Olive Oil</h1> -->
    <div class="page-wrap">
         <router-view />
    </div> 
</template>

<script>
import NavBar from '@/components/NavBar.vue'
  export default{
    name: "App",
    components: {
      NavBar,
    },
  };
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: gainsboro;

}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: white;
}

nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
