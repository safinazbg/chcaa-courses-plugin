<template>
  <section class="coursePrerequisites prerequisites">
    <ColorCard
        title="Course Prerequisites"
        background-color-title="#457b9d"
        color-title="white"
        background-color-content="rgba(69, 123, 157, 0.2)"
    >
      <template v-slot:content>

        <LTwoColumns>
          <template v-slot:items>
            <LIconAndContent
                v-for="(item, index) in prerequisites"
                :key="index"
            >
              <template v-slot:icon>
                <span class="uk-icon" uk-icon="bolt"></span>
              </template>

              <template v-slot:content>
                <p>{{ item }}</p>
              </template>
            </LIconAndContent>
          </template>
        </LTwoColumns>

      </template>
    </ColorCard>
  </section>
</template>

<script>
import LIconAndContent from "../layoutComponents/LIconAndContent";
import LTwoColumns from "../layoutComponents/LTwoColumns";
import ColorCard from "../layoutComponents/ColorCard";

export default {
  name: "CoursePrerequisites",
  components: {
    ColorCard,
    LTwoColumns,
    LIconAndContent,
  },
  props: {
    prerequisites: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.prerequisites {
  background-color: rgba(69, 123, 157, 0.2);

}

.title {
  background-color: #457b9d;
  color: white
}

.padding-h {
  padding: 0 1rem;
}
</style>
