<template>
  <div>
    <h1>Danh sach nguoi dung </h1>
    <h2 v-if="loading" >Loading...</h2>
    <h2 v-else-if="error != ''">Error: {{error}} </h2> 
    <table v-else>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
      </tr>
      <tr v-for="item in users" :key="item.id">
        <td>{{item.id}}</td>
        <td>{{item.name}}</td>
        <td>{{item.email}}</td>
      </tr>
    </table>
    
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      users: [],
      loading:true,
      error: ""
    }
  },
  methods: {
    getUsers() {
      this.loading = true;
      axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        this.users = res.data
      })
      .catch((e) => {this.error = e})
      .finally(() => {
        this.loading = false
      })
    }
  },
  created() {
    this.getUsers()
  }
}
</script>

<style>

</style>