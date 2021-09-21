<template>
  <div
      class="lAutoColumns"
      :style="{columnCount}"
  >
    <div class="item">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
    <div class="item">Deleniti explicabo laborum neque nostrum, quam quia repellat!</div>
    <div class="item">Beatae ea eligendi magni molestiae nisi quoigendi magni molestiae nisi quoigendi magni molestiae nisi quod, sint.</div>
    <div class="item">Corporis ducimus laborum nisi quidem veniam! Expedita, nulla.</div>
    <div class="item">Ad atque facilis maiores nobis optio quibusdam tenetur.</div>
    <div class="item">Ducimus eligendi fugiat nemo obcaecati quaerat quibusdam sit!</div>
    <div class="item">Beatae corporis in molestiae natus perferendis olestiae natus perferendis olestiae natus perferendis quaerat sequi?</div>
    <div class="item">Aliquid eius excepturi harum id numquam. Harum, itaque?</div>
  </div>
</template>

<script>
export default {
  name: "LAutoColumns",
  props: {
    columnCount: {
      type: Number,
      default: 2
    }
  }
}
</script>

<style scoped>
  .lAutoColumns {
    column-width: auto;
  }
  .lAutoColumns>* {
    margin-bottom: .5rem;
  }
</style>
