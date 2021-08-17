<template>
  <section class="objectives courseLearningObjectives">
    <ColorCard
        title="Learning Objectives"
        colorTitle="white"
    >
      <template v-slot:content>

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

      </template>
    </ColorCard>

  </section>
</template>

<script>
import LTwoColumns from "../layoutComponents/LTwoColumns";
import LIconAndContent from "../layoutComponents/LIconAndContent";
import ColorCard from "../layoutComponents/ColorCard";
export default {
  name: "CourseLearningObjectives",
  components: {
    ColorCard,
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

</style>
