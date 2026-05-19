<template>
  <div>
    <p>Ho va ten: {{name}}</p>
    <p>Tuoi: {{age}}</p>
    <p>Student Info: {{getInfo()}}</p>
  </div>
</template>

<script>
import student from './mixins/student'
export default {
  mixins: [
    student
  ]
}
</script>

<style>

</style>