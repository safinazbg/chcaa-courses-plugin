<template>
<LTwoColumns>
  <template v-slot:items>
    <img src="../../assets/logo.png">
    <CourseCard :course="course"></CourseCard>
  </template>
</LTwoColumns>

</template>

<script>
import CourseCard from "./CourseCard";
import LTwoColumns from "../layoutComponents/LTwoColumns";
export default {
name: "CourseCardWithImage",
  components:{
    LTwoColumns,
    CourseCard,
  },
  props: ["course"]
}
</script>

<style scoped>
/*.personCard {*/
/*  width: 500px;*/
/*  display: grid;*/
/*  grid-template-columns: 240px 1fr;*/
/*}*/
/*.verticallyCentered {*/
/*  display: flex;*/
/*  flex-direction: column;*/
/*  justify-content: center;*/
/*}*/
</style>
