<template>
<div class="slide">
  <transition name="slide">
    <slot></slot>
  </transition>
</div>
</template>

<script>
export default {
  name: "Slide"
}
</script>

<style scoped>

</style>
