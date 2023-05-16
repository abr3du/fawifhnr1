<template>
  <img alt="FawiLogo" src="./assets/money.png">
  <Fawi msg="Fachschaft Wirtschaft sagt cash rules"/>
  <Gallery msg="HOT SEXY REWE CLICK NOW"/>
</template>

<script>
//import { db } from '@/firebase';
import Gallery from './components/GalleryView.vue';
import Fawi from './components/FawiPage.vue';

export default {
  name: 'App',
  components: {
    Fawi,
    Gallery
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
