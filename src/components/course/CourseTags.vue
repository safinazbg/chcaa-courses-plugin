<template>
  <div class="courseTags">
    <div
        class="uk-label uk-align-right"
        v-for="tag in courseTags"
        :key="tag"
    >
      {{ tag }}
    </div>
  </div>
</template>

<script>
export default {
  name: "CourseTags",
  props: {
    courseTags: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>
.courseTags>* {
  border-radius: 10px!important;
  margin-left: 1rem !important;
  background-color: #F2AF13!important;
  color: black!important;
}
</style>
