<template>
  <article class="uk-article">
    <h2 class="uk-card-title">{{title}}</h2>
    <p class="uk-article-meta">{{ subtitle }}</p>
    <RawMarkdown
        :payload="body"
        class="uk-text-justify uk-text-emphasis"
    ></RawMarkdown>
    <CourseTags :courseTags="tags"></CourseTags>
  </article>
</template>

<script>
import CourseTags from "./CourseTags";
import RawMarkdown from "../RawMarkdown";
export default {
  name: "TitleAndIntro",
  components:{
    RawMarkdown,
    CourseTags,
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
    },
    tags: {

    }
  }
}
</script>

<style scoped>
article {
  margin-bottom: 0!important;
}
</style>
