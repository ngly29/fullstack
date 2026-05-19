<template>
  <h2>Learn Lifecycle</h2>
  <p>{{msg}}</p>
  <input type="text" v-model="msg">
  <!--
  life cycle cua 1 vue instance co 4 giai doan:
  1. Create
  2. Mount
  3. Update
  4. Unmount
  Trong moi giai doan se co cac lifecycle hooks 
  Cac mothods tu dong duoc thu thi de thuc hien cac hanh dong phu (notify, loadData, call method, ...)
  -->
</template>

<script>
export default {
    data() {
        return {
            msg: "CNTT 17-11"

        }
    },
    beforeCreate() {
        console.log("before Create! data msg: " + this.msg)
    },
    created() {
        console.log("Created! data msg: " + this.msg)
    },
    beforeMount() {
        console.log("before Mount! msg: " + this.msg)
    },
    mounted() {
        console.log("Mounted! data msg: " + this.msg)
    },
    beforeUpdate(){
        console.log("before Update! msg: " + this.msg)
    },
    updated() {
        console.log("Updated! data msg: " + this.msg)
    },
    beforeUnmount(){
        console.log("before Unmount! msg: " + this.msg)
    },
    unmounted() {
        console.log("Unmounted! data msg: " + this.msg)
    }
}
</script>

<style>

</style>