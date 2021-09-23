<template>
<div class="slideShow">
  <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slideshow>

    <ul class="uk-slideshow-items">
      <li>
        <img src="../assets/git.png"  uk-cover>
      </li>
      <li>
        <img src="../assets/jupyter.png"  uk-cover>
      </li>
      <li>
        <img src="../assets/logo.png" uk-cover>
      </li>
    </ul>

    <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
    <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next"></a>

  </div>
</div>

</template>

<script>
export default {
  name: "SlideShow"
}
</script>

<style scoped>

</style>
