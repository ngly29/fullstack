<template>
  <div>
    <!-- <ChildComponent></ChildComponent>
    <child-component>
      Truyen vao text
    </child-component>
    <ChildComponent>
      <u>Truye vao html</u>
    </ChildComponent> -->
    <ChildComponent>
      <template #header>
        <h3>
          Noi dung nay se duoc render trong cap slot name ="header"
        </h3>
      </template>
      <template #body>
        body
      </template>
      <template #footer>
        Footer
      </template>
    </ChildComponent>
  </div>
</template>

<script>
import ChildComponent from './components/ChildComponent.vue';


export default {
  name: 'App',
  components: {
    ChildComponent
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
