<template>
  <div class="moduleBreadCrumbs">
    <ul class="uk-breadcrumb">
      <li><a href="#">Home</a></li>
      <li><a @click="gotoCourse()">{{ courseName }}</a></li>
      <li><span>{{ moduleName }}</span></li>
    </ul>
  </div>
</template>

<script>
import {useRouter} from "vue-router";

export default {
  name: "ModuleBreadCrumbs",
  props: {
    courseName: {
      type: String,
      required: true
    },
    moduleName: {
      type: String,
      required: true
    }
  },
  setup(props){
    const router = useRouter()
    const gotoCourse = () => router.push(`/courses/${props.courseName}`)
    return {
      gotoCourse
    }
  }
}
</script>

<style scoped>

</style>
