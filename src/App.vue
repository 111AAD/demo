<template>
  <div id="app">
     <AppNavbar/>
    <router-view />
    <AppFooter />
  </div>
</template>
<script>
import AppNavbar from './components/AppNavbar.vue';
import AppFooter from './components/Footer.vue';
export default {
  name: 'App',
  components: {
    AppNavbar,
    AppFooter,
  },
}
</script>
<style>
body {
  margin: 0; 
  padding: 0; 
  height:100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  position: relative;
}

.loading-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex; 
  justify-content: center; 
  align-items: center; 
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 1000; 
}


</style>
