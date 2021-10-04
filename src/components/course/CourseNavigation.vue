<template>
<div class="courseNavigation">
  <div class="navbar uk-section">
    <div class="uk-container">
      <h1>Course name</h1>
      <hr class="uk-divider-icon">
      <ul>
        <li>Module 1</li>
        <li>Module 2</li>
        <li>Module 3</li>
        <li>Module 4</li>
        <li>Module 5</li>
      </ul>
      <hr class="uk-divider-icon">

    </div>
  </div>
  <div class="content">
    <slot name="content">

    </slot>
  </div>
</div>
</template>

<script>
export default {
  name: "CourseNavigation"
}
</script>

<style scoped>
.courseNavigation {
  display: grid;
  grid-template-columns: 20rem 1fr;
}
.navbar {
  background-color: #99a3a6;
}

</style>
