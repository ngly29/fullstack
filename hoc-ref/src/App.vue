<template>
  <input ref="name"/>
  <button @click="GetRef">get ref</button>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  methods: {
    GeRef() {
      console.log(this.$refs.name.value);
      console.log("Ref: " + this.$refs.name)
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
