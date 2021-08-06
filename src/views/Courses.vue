<template>
  <div class="about">
    <h1>Teaching Resources</h1>
    <LTwoColumns>
      <template v-slot:items>

        <CourseCard
            v-for="course in courses"
            :key="course.id"
            :course="course"
            color="#bde0fe"
        ></CourseCard>

      </template>
    </LTwoColumns>
  </div>
  <section>

    <LTwoToOne>
      <template v-slot:two>
        <LearningObjectives></LearningObjectives>
      </template>
    </LTwoToOne>
  </section>

</template>

<script>
import LTwoToOne from "../components/layoutComponents/LTwoToOne";
import LearningObjectives from "../components/course/CourseLearningObjectives";
import CourseCard from "../components/courseCard/CourseCard";
import {ref} from "@vue/reactivity";
import LTwoColumns from "../components/layoutComponents/LTwoColumns";

export default {
  name: 'Courses',
  components: {
    CourseCard,
    LTwoColumns,
    LearningObjectives,
    LTwoToOne
  },

  setup() {
    const courses = ref([
      {
        id: 1,
        title: 'Introduction to Jupyter and JupyterLab',
        subtitle: 'The goal of this lesson is to teach learners the user interface of JupyterLab, how Jupyter notebooks work, and what some common and powerful usecases are.',
        level: 'beginner',
      }, {
        id: 2,
        title: 'Introduction to version control with Git',
        subtitle: 'This is the introductory lesson to version control using Git.',
        level: 'beginner',
      },

    ])

    return {
      courses,
    }
  }
}

</script>

<style scoped>



</style>
