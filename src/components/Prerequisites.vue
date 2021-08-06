<template>
  <section>
    <div class="uk-card-title uk-text-center">Prerequisites</div>
    <LTwoColumns>
      <template v-slot:items>
        <LIconAndContent v-for="prerequisite in prerequisites" :key="prerequisite">
          <template v-slot:icon>
            <span class="uk-icon" uk-icon="warning"></span>
          </template>
          <template v-slot:content>
            <p>{{prerequisite}}</p>
          </template>
        </LIconAndContent>
      </template>
    </LTwoColumns>
  </section>
</template>

<script>
import LIconAndContent from "./layoutComponents/LIconAndContent";
import LTwoColumns from "./layoutComponents/LTwoColumns";

export default {
  name: "Prerequisites",
  components: {
    LTwoColumns,
    LIconAndContent,
  },
  setup() {
    const prerequisites = [
      'A reasonably recent version of Jupyter and JupyterLab, which is installed as part of the Conda environment for CodeRefinery workshops.',
      'Optional (we only demonstrate this): A reasonably recent version of Git to be able to work with the JupyterLab Git integration.'
    ]
    return {
      prerequisites
    }
  }
}
</script>

<style scoped>

</style>
