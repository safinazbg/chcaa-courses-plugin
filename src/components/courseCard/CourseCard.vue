<template>
  <div class="courseCard uk-card-small uk-card-default uk-card-body">
    <LSquareAndContent>
      <template v-slot:square>
        <img class="uk-border-radius-circle"
             src="../../assets/jupyter.png" height="200" width="200"/>
      </template>
      <template v-slot:content>
        <div class="">
          <h1>{{ title }}</h1>
          <p>{{ brief }}</p>
        </div>
      </template>
    </LSquareAndContent>
  </div>
</template>

<script>
import LSquareAndContent from "../layoutComponents/LSquareAndContent";
import {ref} from "vue";
import axios from "axios";
export default {
  name: "CourseCard",
  props: {
    courseName: {
      type: String,
      required: true
    },
  },
  components: {
    LSquareAndContent,
  },

  setup(props) {
    const title = ref('')
    const brief = ref('')

    axios.get(`https://raw.githubusercontent.com/safinazbg/coursePageData/master/courses/${props.courseName}/course.json`)
        .then(result => {

          const course = result.data
          title.value = course.title
          brief.value = course.brief

        })

    return {
      title,
      brief
    }
  }
}
</script>

<style scoped>

</style>
