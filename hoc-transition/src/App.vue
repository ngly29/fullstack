<template>
  <!--
  trong VueJs co 2component ho tro transition va animation-->
  <button @click="showText= !showText">showText</button>
  <transition>
    <h3 v-if="showText">transition component</h3>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      showText: true,
      tasks: ["L", "C"],
      task: null
    }
  },
  methods: {
    AddTask() {
      this.tasks.push(this.task);
    },
    RemoveTask(){
      this.tasks.pop();
    }
  }
}
</script>

<style>

</style>