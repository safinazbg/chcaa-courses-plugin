<template>
<div class="imageAndContent">
  <slot name="image">

  </slot>
  <slot name="content">

  </slot>
</div>
</template>

<script>
export default {
name: "LImageAndContent"
}
</script>

<style scoped>
.imageAndContent {
  display: grid;
  grid-template-columns: 1rem 1fr;
  grid-gap: 1rem;
}

</style>
