<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  
  <!-- Chỗ này đúng rồi: truyền name, age và hứng @updateHandler -->
  <HocProps
    :name="name"
    :age="age"
    @updateHandler="updateAge" 
  />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import HocProps from './components/HocProps.vue' // Bạn nhớ phải import nó vào nhé!

export default {
  name: 'App',
  components: {
    HelloWorld,
    HocProps
  },
  // 1. Phải khai báo data để chứa name và age
  data() {
    return {
      name: "Người dùng mới",
      age: 20
    }
  },
  // 2. Phải khai báo methods để xử lý khi con "bắn" event lên
  methods: {
    updateAge(newAge, status) {
      console.log("Trạng thái từ con:", status);
      this.age = newAge; // Cập nhật lại age ở Cha, tự động Con sẽ được cập nhật theo
    }
  }
}
</script>