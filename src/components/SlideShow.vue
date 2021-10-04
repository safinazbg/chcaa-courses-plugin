<template>
<div class="slideShow">
  <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slideshow>
    <ul class="uk-slideshow-items" v-for="slide in slides" :key="slide">
      <li>
        <img :src="require(`@/assets/${slide}.png`)" uk-cover>
      </li>

    </ul>
    <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
    <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next"></a>
  </div>
</div>

</template>

<script>
import {ref} from "@vue/reactivity";

export default {
  name: "SlideShow",
  setup() {
    const slides = ref(['git', 'jupyter', 'logo'])
    return {
      slides
    }
  }
}
</script>

<style scoped>

</style>
