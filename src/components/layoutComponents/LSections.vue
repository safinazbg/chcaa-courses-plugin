<template>
  <div class="sections">
    <slot name="sections"></slot>
  </div>
</template>

<script>
export default {
name: "LSections"
}
</script>

<style>
  .sections>* {
    margin: 0 0 3rem 0;
  }
</style>
