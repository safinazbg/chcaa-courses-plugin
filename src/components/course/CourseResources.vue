<template>
  <div class="courseResources">
    <ColorCard
        title="Course Resources"
        background-color-title="grey"
        color-title="white"
        background-color-content="lightgrey"
    >
      <template v-slot:content>

        <div class="uk-card uk-card-small uk-card-body">

          <RawMarkdown :payload="resources"></RawMarkdown>
        </div>

      </template>

    </ColorCard>
  </div>
</template>

<script>
import RawMarkdown from "../RawMarkdown";
import ColorCard from "../layoutComponents/ColorCard";
import {ref} from "vue";

export default {
  name: "CourseResources",
  components: {
    RawMarkdown,
    ColorCard,
  },
  setup() {
    const resources = ref(`
__readings__

- lorem ipsum 10
- lorem ipsum 10
- lorem ipsum 10
- lorem ipsum 10
- lorem ipsum 10

__software__
- lorem ipsum 10
- lorem ipsum 10
`)
    return {
      resources
    }
  }

}
</script>

<style scoped>

</style>
