<template>
  <LTwoColumns>
    <template v-slot:items>

      <ModalCard>
        <template v-slot:content>

          <h2>Card content</h2>
          <p class="uk-text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus eos iusto quasi.
            Adipisci laudantium officiis similique. Aut debitis doloribus rerum.</p>

        </template>
      </ModalCard>

      <ModalCard>
        <template v-slot:content>

          <img
              src="https://images.unsplash.com/photo-1548175551-1edaea7bbf0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80">

        </template>
      </ModalCard>

    </template>
  </LTwoColumns>

  <LFourColumns>
    <template v-slot:gridItems>
      <ModalCard color="yellow">
        <template v-slot:content>
        <h2>Something new</h2>
        </template>
      </ModalCard>
      <ModalCard>
        <h2>Something new</h2>
      </ModalCard>

      <ModalCard>
        <h2>Something new</h2>
      </ModalCard>

      <ModalCard color="blue">
        <h2>Something new</h2>
      </ModalCard>

    </template>
  </LFourColumns>


</template>

<script>
import LFourColumns from "../components/layoutComponents/LFourColumns";
import LTwoColumns from "../components/layoutComponents/LTwoColumns";
import ModalCard from "../components/ModalCard";

export default {
  name: 'Home',
  components: {
    ModalCard,
    LTwoColumns,
    LFourColumns,
  }
}
</script>
