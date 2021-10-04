<template>
  <div class="carousel">
    <slot :currentSlide="currentSlide"></slot>
    <!--    Navigation-->
    <div class="navigate">
      <div class="togglePage left">
        <span @click="prevSlide" uk-icon="icon: chevron-left"></span>
      </div>
      <div class="togglePage right">
        <span @click="nextSlide" uk-icon="icon: chevron-right"></span>
      </div>
    </div>
  </div>
</template>

<script>
import {ref} from "@vue/reactivity";
import {onMounted} from "vue";

export default {
  name: "Carousel",

  setup() {
    const currentSlide = ref(1)
    const getSlideCount = ref(null)

    //next slide
    const nextSlide = () => {
      if(currentSlide.value === getSlideCount.value) {
        currentSlide.value = 1
        return;
      }
      currentSlide.value += 1;
    }

    //previous slide
    const prevSlide = () => {
      if(currentSlide.value === 1) {
        currentSlide.value = 1;
        return;
      }
      currentSlide.value -= 1
    }

    onMounted(()=>  {
      getSlideCount.value = document.querySelectorAll('.slide').length
    })

    return {
      currentSlide,
      getSlideCount,
      nextSlide,
      prevSlide
    }
  }
}
</script>

<style scoped>
.navigate {
  padding: 0 16px;
  height: 100%;
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
}
.togglePage {
  display: flex;
  flex: 1;
}
.right {
  justify-content: flex-end;
}
span {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background-color: #0e1f5b;
  color: #fff;
}
</style>
