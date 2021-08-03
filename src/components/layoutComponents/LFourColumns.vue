<template>
  <div class="columns">

    <slot name="gridItems"></slot>

  </div>
</template>

<script>
export default {
name: "LFourColumns"
}
</script>

<style scoped>
.columns {
  display: grid;
  padding: 1rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 1rem;
}
</style>
