<template>
  <div class="squareAndContent">
    <div class="square">
      <slot name="square">

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
  name: "LSquareAndContent"
}
</script>

<style scoped>
.squareAndContent {
  min-height: 100%;
  display: grid;
  grid-template-columns: 10rem 1fr;
  grid-gap: 1rem;
}
.square {
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>
