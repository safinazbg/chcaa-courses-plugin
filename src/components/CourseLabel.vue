<template>
  <span class=" label uk-label">
    <slot></slot>
  </span>
</template>

<script>
export default {
name: "CourseLabel",
  props: ['labelName']
}
</script>

<style scoped>
.label {
  border-radius: 10px;
}
</style>
