<template>
  <div class="moduleBreadCrumbs">
    <ul class="uk-breadcrumb">
      <li><a href="#">Home</a></li>
      <li><a @click="gotoCourse()">{{ courseTitle }}</a></li>
      <li><span>{{ moduleTitle }}</span></li>
    </ul>
  </div>
</template>

<script>
import {useRouter} from "vue-router";
import axios from "axios";
import {ref} from "vue";

export default {
  name: "ModuleBreadCrumbs",
  props: {
    courseName: {
      type: String,
      required: true
    },
    moduleName: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const router = useRouter()
    const courseTitle = ref('')
    const moduleTitle = ref('')
    const gotoCourse = () => router.push(`/courses/${props.courseName}`)

    axios.get(`https://raw.githubusercontent.com/safinazbg/coursePageData/master/courses/${props.courseName}/modules/${props.moduleName}.json`)
        .then(result => {

          const module = result.data

          moduleTitle.value = module.title

        })

    axios.get(`https://raw.githubusercontent.com/safinazbg/coursePageData/master/courses/${props.courseName}/course.json`)
        .then(result => {

          const module = result.data

          courseTitle.value = module.title

        })
    return {
      moduleTitle,
      courseTitle,
      gotoCourse
    }
  }
}
</script>

<style scoped>

</style>
