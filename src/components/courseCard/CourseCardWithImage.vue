<template>
    <div class="personCard uk-card uk-card-default">
      <div class="uk-card-media-left uk-padding-remove-left">
        <img src="../assets/logo.png" width="240" >
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
</template>

<script>
export default {
name: "CourseCardWithImage"
}
</script>

<style scoped>
.personCard {
  width: 500px;
  display: grid;
  grid-template-columns: 240px 1fr;
}
/*.verticallyCentered {*/
/*  display: flex;*/
/*  flex-direction: column;*/
/*  justify-content: center;*/
/*}*/
</style>
