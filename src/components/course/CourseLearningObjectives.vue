<template>
  <section class="objectives courseLearningObjectives uk-card-default">

    <div class="uk-text-center title">Learning Objectives</div>
    <div class="padding-h content">

      <div
          class="editor"
          v-if="showEditor"
      >
        <LinesEditor
            :lines="objectivesList"
            @update="onObjectivesUpdate"
        ></LinesEditor>
      </div>

      <LTwoColumns>
        <template v-slot:items>

          <LIconAndContent
              v-for="(objective, index) in objectivesList"
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
import LinesEditor from "@/components/LinesEditor";
import LTwoColumns from "../layoutComponents/LTwoColumns";
import LIconAndContent from "../layoutComponents/LIconAndContent";
import {computed, ref} from "@vue/reactivity";

export default {
  name: "CourseLearningObjectives",
  components: {
    LIconAndContent,
    LTwoColumns,
    LinesEditor,
  },
  props: {
    objectives: {
      type: Array,
      required: true
    },
    showEditor: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const updatedList = ref([])
    const objectivesList = computed(() => updatedList.value.length ? updatedList.value : props.objectives)
    const onObjectivesUpdate = objectives => updatedList.value = objectives
    return {
      objectivesList,
      onObjectivesUpdate,
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
  min-height: 180px !important;
  /*background-color: #E6F2FC;*/
  padding: 1rem 1rem;
}
</style>
