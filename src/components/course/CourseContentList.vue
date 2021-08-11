<template>
  <div class="courseContentList">
    <button
        v-for="(name, index) in moduleNames"
        :key="index"
        class="uk-button uk-width-1-1 uk-margin-bottom uk-text-capitalize button"
        @click="openCourseModule($event, index+1)"
    >{{name}}</button>
  </div>
</template>

<script>
import {useRouter} from "vue-router";

export default {
  name: "CourseContentList",
  props: {
    courseName: {
      type: String,
      required: true
    },
    moduleNames: {
      type: Array,
      required: true
    }
  },
  setup(props) {
    const router = useRouter()
    const openCourseModule = (event, index) => router.push('/courses/' + props.courseName + '/module/Module' + index)
    return {
      openCourseModule,
    }
  }
}
</script>

<style scoped>
.button {
  background-color: #1d3557;
  color: white;
}
button:hover {
  box-shadow: 0 8px 16px 0 rgb(29, 53, 87);
}
</style>
