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
  display: flex;
  flex-direction: column;
  /*column-gap: 1rem;*/
}


</style>
