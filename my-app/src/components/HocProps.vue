<template>
  <div>
    <!-- Render dữ liệu từ Props -->
    <h3>{{ name }} - {{ age }}</h3>
    <button @click="incrementAge">Increment Age</button>
  </div>
</template>

<script>
export default {
  name: "HocProps",
  // 1. Khai báo Props
  props: {
    name: {
      type: String,
      required: true // Phải truyền tên vào, nếu không Vue sẽ cảnh báo
    },
    age: {
      type: Number,
      default: 200
    }
  },
  // 2. Các hàm xử lý
  methods: { // Phải có chữ 's'
    incrementAge() {
      const newAge = this.age + 1;
      // 3. Bắn sự kiện lên cha (Emit)
      // Con không được tự ý sửa this.age, mà phải bảo Cha sửa
      this.$emit("updateHandler", newAge, 'updated');
    }
  }
}
</script>