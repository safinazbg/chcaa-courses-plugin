<template>
  <div class="columns">

    <slot name="items">

    </slot>

  </div>
</template>

<script>
export default {
  name: "LTwoColumns"
}
</script>

<style>

  .columns {
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
  }
</style>
