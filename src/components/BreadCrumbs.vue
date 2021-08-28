<template>
  <div class="breadCrumbs">
    <ul class="uk-breadcrumb">
      <li>
        <a
            class="clickable"
            @click="goHome()"
        >Home</a>
      </li>
      <li>
        <a
            @click="gotoCourse()"
            :class="{clickable: moduleTitle}"
        >{{ courseTitle }}</a>
      </li>
      <li v-if="moduleTitle"><a>{{ moduleTitle }}</a></li>
    </ul>
  </div>
</template>

<script>
import { useRouter} from "vue-router";
import axios from "axios";
import {ref} from "vue";

export default {
  name: "BreadCrumbs",
  props: {
    courseName: {
      type: String,
      required: true
    },
    moduleName: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const router = useRouter()
    const courseTitle = ref('')
    const moduleTitle = ref('')
    const goHome = () => router.push('/')
    const gotoCourse = () => router.push(`/courses/${props.courseName}`)

    if (props.moduleName) {
      axios.get(`https://raw.githubusercontent.com/safinazbg/coursePageData/master/courses/${props.courseName}/modules/${props.moduleName}.json`)
          .then(result => {

            const module = result.data

            moduleTitle.value = module.title

          })
    }

    axios.get(`https://raw.githubusercontent.com/safinazbg/coursePageData/master/courses/${props.courseName}/course.json`)
        .then(result => {

          const module = result.data

          courseTitle.value = module.title

        })

    return {
      moduleTitle,
      courseTitle,
      gotoCourse,
      goHome
    }
  }
}
</script>

<style scoped>
a {
  font-size: 130%;
  cursor: unset;
}
.clickable {
  color: #134B7D;
  cursor: pointer;
}
</style>
