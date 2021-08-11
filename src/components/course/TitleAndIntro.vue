<template>
  <article class="uk-article courseOverview">
    <h2 class="uk-card-title">{{title}}</h2>
    <p class="uk-article-meta">{{ subtitle }}</p>
    <RawMarkdown :payload="body"></RawMarkdown>
  </article>
</template>

<script>
import RawMarkdown from "../RawMarkdown";
export default {
  name: "TitleAndIntro",
  components:{
    RawMarkdown,
  },
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
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
