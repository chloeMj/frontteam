<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <mainComp></mainComp>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import mainComp from './components/mainComp.vue'
import './assets/css/layout.css'
import './assets/css/commons.css'

export default {
  name: 'App',
  components: {
    // HelloWorld, 
    mainComp
  }
}
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
