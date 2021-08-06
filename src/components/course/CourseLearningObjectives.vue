<template>
  <section class="objectives courseLearningObjectives">
    <div class="uk-card-title uk-text-center title">Learning Objectives</div>
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

.objectives{
  background-color: #fee0d2;
}

.title {
  background-color: #fc9272;
}
/*.column {*/
/*  display: grid;*/
/*  width: 100%;*/
/*  padding: 1rem;*/
/*  grid-template-columns: 1fr;*/
/*  grid-gap: 1rem;*/
/*}*/

</style>
