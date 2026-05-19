<template>
  <div>
    <p>Count: {{ getCount }}</p>
    <p>Player: {{ getName }}</p>

    <button @click="increment">Increment</button>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex"

export default {
  computed: {
    ...mapGetters(["getCount"]),
    ...mapGetters("user", ["getName"])
  },

  methods: {
    ...mapMutations(["setCount"]),

    increment() {
      this.setCount(this.getCount + 1)
    }
  }
}
</script>

<style>
</style>