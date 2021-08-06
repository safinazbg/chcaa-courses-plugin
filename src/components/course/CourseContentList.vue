<template>
  <div class="courseContentList">
    <button
        v-for="name in moduleNames"
        :key="name"
        class="uk-button uk-card-hover uk-width-1-1"
        @click="openCourseModule($event, name)"
    >{{name}}</button>
  </div>
</template>

<script>
import {useRouter} from "vue-router";

export default {
  name: "CourseContentList",
  props: {
    moduleNames: {
      type: Array,
      required: true
    }
  },
  setup() {
    const router = useRouter()
    const openCourseModule = (event, name) => router.push('/module/' + name)
    return {
      openCourseModule,
    }
  }
}
</script>

<style scoped>

</style>
