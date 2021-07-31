<template>
  <button class="button uk-button uk-button-default">{{name}}</button>
</template>

<script>
export default {
name: "Button",
  props: ["name"]
}
</script>

<style scoped>
.button {
  border-radius: 5px;
}
</style>
