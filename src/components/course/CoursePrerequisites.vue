<template>
  <section class="coursePrerequisites prerequisites">
    <div class="uk-card-title uk-text-center title">Course Prerequisites</div>
    <div class="padding-h">
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
    </div>
  </section>
</template>

<script>
import LIconAndContent from "../layoutComponents/LIconAndContent";
import LTwoColumns from "../layoutComponents/LTwoColumns";

export default {
  name: "CoursePrerequisites",
  components: {
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
.title{
  background-color: #457b9d;
  color: white
}
.padding-h {
  padding: 0 1rem;
}
</style>
