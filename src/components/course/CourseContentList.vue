<template>
  <div class="uk-card uk-card-default uk-card-body">
    <h3>Course Modules</h3>
    <ul class="courseContentList uk-list uk-list-striped">
      <li
          v-for="(name, index) in moduleNames"
          :key="index"
          class="uk-width-1-1 uk-text-capitalize"
          @click="openCourseModule($event, index+1)"
      >{{name}}
      </li>
    </ul>
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
  background-color: #1f768f;
  color: white;
}
li:hover {
  background-color: rgba(0, 0, 0, 0.08) !important;
  box-shadow: 0 0 24px rgba(0, 0, 0, 0.08);
}
li {
  cursor: pointer;
}
</style>
