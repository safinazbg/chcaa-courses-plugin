<template>
  <article class="uk-article courseOverview">
    <h2 class="uk-article-title">Course Overview</h2>
    <p class="uk-article-meta">{{ subtitle }}</p>
    <p>{{ body }}</p>
  </article>
</template>

<script>
export default {
  name: "CourseOverview",
  props: {
    subtitle: {
      type: String,
      required: true
    },
    body: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
