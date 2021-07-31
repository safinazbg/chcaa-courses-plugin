<template>
  <div class="columns">

    <slot name="items"></slot>

  </div>
</template>

<script>
export default {
  name: "LTwoColumns"
}
</script>

<style scoped>
  .columns {
    display: grid;
    width: 100%;
    padding: 1rem;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
  }


</style>
