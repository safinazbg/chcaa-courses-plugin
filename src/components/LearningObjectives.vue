<template>
  <section class="objectives">
    <div class="title"></div>
    <LTwoColumns>
      <template v-slot:items>
        <LIconAndContent
            v-for="objective in objectives"
            :key="objective"
        >
          <template v-slot:content>
            <p>{{ objective }}</p>
          </template>
        </LIconAndContent>
      </template>
    </LTwoColumns>
  </section>
</template>

<script>
import LTwoColumns from "./layoutComponents/LTwoColumns";
import LIconAndContent from "./layoutComponents/LIconAndContent";

export default {
  name: "LearnignObjectves",
  components: {
    LIconAndContent,
    LTwoColumns,
  },
  setup(){
    const objectives = [
      'Key mindfulness concepts and practices that support the ability to use attention in an enhanced way.',
        'Concepts and practices that deepen the understanding of the mind/body connection, and highlights ways that the body is a direct portal to presence.',
        'Guidance for enhancing resilience, with specific regard to opening to and accepting a wide range of emotion.',
        'How to take the benefits that come from regular meditation and integrate them into daily life, as well as establishing a regular meditation routine.'
    ]
    return {
    objectives
    }
  }
}
</script>

<style scoped>

.objectives{
  background-color: #fcbf49;
}


/*.column {*/
/*  display: grid;*/
/*  width: 100%;*/
/*  padding: 1rem;*/
/*  grid-template-columns: 1fr;*/
/*  grid-gap: 1rem;*/
/*}*/

</style>
