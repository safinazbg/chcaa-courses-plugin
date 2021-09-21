<template>
  <div class="courses">
    <LLandingPage>
      <template v-slot:page>
        <h1 class="uk-text-center">Courses</h1>
        <LTwoColumns>
          <template v-slot:items>

            <CourseCard
                v-for="(name, index) in courseNames"
                :key="index"
                :courseName="name"
                @click="openCourse(name)"
            ></CourseCard>

          </template>
        </LTwoColumns>
      </template>
    </LLandingPage>
  </div>

  <LinesEditor></LinesEditor>
</template>

<script>
import LinesEditor from "@/components/LinesEditor";
import LLandingPage from "../components/layoutComponents/LLandingPage";
import CourseCard from "../components/courseCard/CourseCard";
import {ref} from "@vue/reactivity";
import LTwoColumns from "../components/layoutComponents/LTwoColumns";
import axios from "axios";
import {useRouter} from "vue-router";

export default {
  name: 'Courses',
  components: {
    CourseCard,
    LLandingPage,
    LTwoColumns,
    LinesEditor,
  },
  setup() {
    const router = useRouter()
    const courseNames = ref([])

    axios.get(`https://raw.githubusercontent.com/safinazbg/coursePageData/master/courses/list.json`)
        .then(result => {
          console.log(result.data.length, )
          courseNames.value = result.data
        })

    const openCourse = name => router.push(`/courses/${name}`)

    return {
      courseNames,
      openCourse,
    }
  }
}

</script>

<style scoped>


</style>
