<template>
  <section class="coursePrerequisites prerequisites uk-card-default">

    <div class="uk-text-center title">Course Prerequisites</div>
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
}

.title {
  font-size: 130%;
  background-color: #003D73;
  color: white
}

.padding-h {
  min-height: 180px!important;
  padding: 1rem 1rem;
}
</style>
