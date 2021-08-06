<template>

  <div class="courseModule">
    <LLandingPage>

      <template v-slot:page>

        loaded module: {{ moduleName }}

      </template>
    </LLandingPage>
  </div>
</template>

<script>
import LLandingPage from "../../layoutComponents/LLandingPage";

export default {
  name: "CourseModule",
  components: {
    LLandingPage,
  },
  props: {
    moduleName: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
