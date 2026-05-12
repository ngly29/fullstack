<template>
  <h2>Noi dung nhan duoc tu father duoc truyen vao component slot</h2>
  <p>
    <i>
        <slot>
            Default
        </slot>
    </i>
  </p>
  <!--
  Neu khong father khong truyen vao noi dung thi noi dung tron cap
  the slot se duoc hien thi. Doan noi dung mac dinh nay duoc goi la FallBack Content-->
  <slot name="header"></slot>
  <slot name="body"></slot>
  <slot name="footer"></slot>
</template>

<script>
export default {

}
</script>

<style>

</style>