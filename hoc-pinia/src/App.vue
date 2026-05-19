<template>
  <p>Count: {{getCount}}
  <button @click="increment">increment</button>
</template>

<script>
import { counterStore } from './store/counter'
  export default {
    setup() {
      const store = counterStore();
      return store;
    }
  }
</script>

<style>

</style>
