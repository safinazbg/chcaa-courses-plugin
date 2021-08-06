<template>
  <div
      class="uk-label courseTags"
      v-for="tag in courseTags"
      :key="tag"
  >
    {{tag}}
  </div>
</template>

<script>
  export default {
    name: "CourseTags",
    props: {
      courseTags: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style scoped>

</style>
