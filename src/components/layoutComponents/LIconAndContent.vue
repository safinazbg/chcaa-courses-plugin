<template>
  <div class="iconAndContent">
    <div class="icon">
      <slot name="icon">

      </slot>
    </div>
    <div class="content">
      <slot name="content">

      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "LIconAndContent"
}
</script>

<style scoped>
.iconAndContent {
  display: grid;
  grid-template-columns: 1rem 1fr;
  grid-gap: 1rem;
}


</style>
