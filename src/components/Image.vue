<template>
  <div class="image">
    <img :src="src" alt="">

  </div>
</template>

<script>
import {computed} from "@vue/reactivity";

export default {
  name: "Image",
  props: {
    imageName: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const src = computed(() =>
        `https://raw.githubusercontent.com/safinazbg/coursePageData/master/courses/assets/${props.imageName}`
    )

    return {
      src
    }
  }
}
</script>

<style scoped>

</style>
