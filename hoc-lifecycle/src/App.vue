<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <div v-if="show">
    <InstanceComponent />
  </div>
  <button @click="show = !show">Toggle</button>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import InstanceComponent from './components/InstanceComponent.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
    InstanceComponent
  },
  data() {
    return {
      show: true
    }
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
