<template>
<div class="slider">
  <Carousel class="carousel" v-slot="{ currentSlide }">
    <Slide v-for="(slide,index) in carouselSlides" :key="index">
      <div v-show="currentSlide === index +1" class="slideInfo">
        <img :src="require(`@/assets/${slide}.png`)" alt="">
      </div>
    </Slide>
  </Carousel>
</div>
</template>

<script>
import Carousel from "@/components/carousel/Carousel";
import Slide from "@/components/carousel/Slide";
import {ref} from "@vue/reactivity";
export default {
  name: "Slider",
  components: {
    Carousel,
    Slide
  },

  setup() {
    const carouselSlides = ref(['git', 'jupyter', 'logo'])
    return {
      carouselSlides,
    }
  }
}
</script>

<style scoped>
.carousel {
  position: relative;
  max-height: 100vh;
  height: 100vh;
}
.slideInfo {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  max-height: 100%;
  /*height: 100%;*/
}

img {
  min-width: 100%;
  height: max-content;
  object-fit: cover;
}
</style>
