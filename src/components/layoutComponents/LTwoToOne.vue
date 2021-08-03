<template>
<div class="twoToOne">
  <div>
    <slot name="two">

    </slot>
  </div>
  <div>
    <slot name="one">

    </slot>
  </div>
</div>
  <slot name="test">

  </slot>
</template>

<script>
export default {
  name: "LTwoToOne"
}
</script>

<style scoped>
.twoToOne {
  display: grid;
  grid-template-columns: 2fr 1fr;
}
</style>
