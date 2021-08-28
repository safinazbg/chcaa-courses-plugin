<template>
  <section class="objectives courseLearningObjectives uk-card-default">

    <div class="uk-text-center title">Learning Objectives</div>
    <div class="padding-h content">

      <LTwoColumns>
        <template v-slot:items>

          <LIconAndContent
              v-for="(objective, index) in objectives"
              :key="index"
          >
            <template v-slot:icon>
              <span class="uk-icon" uk-icon="check"></span>
            </template>
            <template v-slot:content>
              <p>{{ objective }}</p>
            </template>
          </LIconAndContent>
        </template>
      </LTwoColumns>

    </div>
  </section>
</template>

<script>
import LTwoColumns from "../layoutComponents/LTwoColumns";
import LIconAndContent from "../layoutComponents/LIconAndContent";

export default {
  name: "CourseLearningObjectives",
  components: {
    LIconAndContent,
    LTwoColumns,
  },
  props: {
    objectives: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.courseLearningObjectives {
}
.title {
  font-size: 130%;
  background-color: #003D73;
  color: white;
}

.content {
  min-height: 180px!important;
  /*background-color: #E6F2FC;*/
  padding: 1rem 1rem;
}
</style>
