<template>
    <div class="uk-card uk-card-default uk-card-hover uk-card-body" :style="{backgroundColor: color}">
      <CourseLabel class="uk-align-right">{{course.level}}</CourseLabel>
      <h3 class="uk-card-title">{{ course.title }}</h3>
      <p class="uk-text-left">{{ snippet }}</p>
      <div class="uk-padding-small">
      <Button class="uk-align-right@l" name="go to course!"></Button>
      </div>
    </div>
</template>

<script>
import CourseLabel from "../CourseLabel";

import Button from "../buttons/Button";
import {computed} from "@vue/reactivity";

export default {
  name: "CourseCard",
  props: ['course', 'color'],
  components: {
    Button,
    CourseLabel
  },

  setup(props) {
    const snippet = computed(() => {
      return props.course.subtitle.substring(0, 200) + '...'
    })

    return {
      snippet
    }
  }
}
</script>

<style scoped>

</style>
