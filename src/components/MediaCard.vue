<template>

    <div class="mediaCard uk-card uk-card-default">
      <div class="uk-card-media-right">
          <img
              src="../assets/logo.png" height="100" width="100">
      </div>
      <div class="uk-card-body uk-text-left">
        <div class="uk-text-emphasis">Role</div>
        <div class="uk-text-bold">Name</div>
        <div class="uk-text-italic">Affiliation</div>
        <hr class="uk-divider-small">
        <div>Email</div>
        <div>Tel</div>
      </div>
    </div>


          <div class="uk-card uk-card-default">
            <div class="uk-card-media-top">
              <img src="../assets/logo.png" height="100" width="100"/>
            </div>
            <div class="uk-card-body">
              <h3 class="uk-card-title">Media Top</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            </div>
          </div>


  <LTwoColumns>
    <template v-slot:items>

    </template>
  </LTwoColumns>

</template>

<script>
import LTwoColumns from "./layoutComponents/LTwoColumns";
export default {
  name: "MediaCard",
  components: {
    LTwoColumns,
  }
}
</script>

<style scoped>
.mediaCard {
  width: 500px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
</style>
