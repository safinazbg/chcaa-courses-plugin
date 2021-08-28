<template>
  <div class="courseLanding">
    <LLandingPage>

      <template v-slot:page>

        <LSections>

          <template v-slot:sections>
            <BreadCrumbs :courseName="courseName"></BreadCrumbs>
            <h1 class="uk-text-center">{{ title }}</h1>
            <TitleAndIntro
                title="Course Overview"
                :subtitle="subtitle"
                :body="body"
                :tags="['vue', 'JavaScript', 'uikit']"
            ></TitleAndIntro>

            <LTwoColumns>
              <template v-slot:items>

                <CoursePrerequisites :prerequisites="prerequisites"></CoursePrerequisites>
                <CourseLearningObjectives :objectives="objectives"></CourseLearningObjectives>

                <CourseContentList
                    :courseName="courseName"
                    :moduleNames="moduleNames"
                ></CourseContentList>
                <CourseResources
                    :courseName="courseName"
                ></CourseResources>

              </template>
            </LTwoColumns>

          </template>

        </LSections>
      </template>

    </LLandingPage>
  </div>
</template>

<script>
import LTwoColumns from "../layoutComponents/LTwoColumns";
import CourseLearningObjectives from "./CourseLearningObjectives";
import CoursePrerequisites from "./CoursePrerequisites";
import LSections from "../layoutComponents/LSections";
import LLandingPage from "../layoutComponents/LLandingPage";
import TitleAndIntro from "./TitleAndIntro";
import CourseContentList from "./CourseContentList";
import axios from 'axios';
import {ref} from "@vue/reactivity";
import BreadCrumbs from "../BreadCrumbs";
import CourseResources from "./CourseResources";

export default {
  name: "CourseLanding",
  components: {
    CourseResources,
    BreadCrumbs,
    LSections,
    LLandingPage,
    TitleAndIntro,
    CourseContentList,
    CoursePrerequisites,
    CourseLearningObjectives,
    LTwoColumns,
  },
  props: {
    courseName: {
      type: String,
      required: true
    },
  },
  setup(props) {
    const courseTags = ref([])
    const prerequisites = ref([])
    const moduleNames = ref([])
    const title = ref('')
    const subtitle = ref('')
    const body = ref('')
    const objectives = ref([])

    axios.get(`https://raw.githubusercontent.com/safinazbg/coursePageData/master/courses/${props.courseName}/courseOverview.md`)
        .then(result => body.value = result.data)

    axios.get(`https://raw.githubusercontent.com/safinazbg/coursePageData/master/courses/${props.courseName}/course.json`)
        .then(result => {

          const course = result.data
          objectives.value = course.objectives
          courseTags.value = course.courseTags
          prerequisites.value = course.prerequisites
          title.value = course.title
          subtitle.value = course.subtitle
          moduleNames.value = course.moduleNames

        })

    return {
      courseTags,
      prerequisites,
      title,
      subtitle,
      body,
      moduleNames,
      objectives
    }
  }
}
</script>

<style scoped>

</style>
