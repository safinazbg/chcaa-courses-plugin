<template>
<div class="iconAndContent">
  <div class="icon">
    <span class="uk-icon" uk-icon="check"></span>
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
