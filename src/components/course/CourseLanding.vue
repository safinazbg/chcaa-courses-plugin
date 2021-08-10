<template>
  <div class="courseLanding">
    <LLandingPage>

      <template v-slot:page>


        <LSections>

          <template v-slot:sections>

            <h1 class="uk-text-center">{{ title }}</h1>
            <CourseOverview
                :subtitle="subtitle"
                :body="body"
            ></CourseOverview>
            <CourseTags :courseTags="['something']"></CourseTags>
            <CourseLearningObjectives :objectives="objectives"></CourseLearningObjectives>
            <CourseContentList :moduleNames="moduleNames"></CourseContentList>

          </template>

        </LSections>
      </template>

    </LLandingPage>
  </div>
</template>

<script>
import LSections from "../layoutComponents/LSections";
import LLandingPage from "../layoutComponents/LLandingPage";
import CourseTags from "./CourseTags";
import CourseLearningObjectives from "./CourseLearningObjectives";
import CourseOverview from "./CourseOverview";
import CourseContentList from "./CourseContentList";
import axios from 'axios';
import {ref} from "@vue/reactivity";

export default {
  name: "CourseLanding",
  components: {
    LSections,
    LLandingPage,
    CourseTags,
    CourseLearningObjectives,
    CourseOverview,
    CourseContentList,
  },
  props: {
    courseName: {
      type: String,
      required: true
    },
  },
  setup(props) {
    const courseTags = ref([])
    const objectives = ref([])
    const moduleNames = ref([])
    const title = ref('')
    const subtitle = ref('')
    const body = ref('')

    axios.get(`https://raw.githubusercontent.com/safinazbg/coursePageData/master/courses/${props.courseName}/courseOverview.md`)
        .then(result => body.value = result.data)

    axios.get(`https://raw.githubusercontent.com/safinazbg/coursePageData/master/courses/${props.courseName}/course.json`)
        .then(result => {

          const course = result.data

          courseTags.value = course.courseTags
          objectives.value = course.objectives
          title.value = course.title
          subtitle.value = course.subtitle
          moduleNames.value = course.moduleNames

        })

    return {
      courseTags,
      objectives,
      title,
      subtitle,
      body,
      moduleNames
    }
  }
}
</script>

<style scoped>

</style>
