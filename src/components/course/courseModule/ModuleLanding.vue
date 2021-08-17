<template>

  <div class="ModuleLanding">
    <LLandingPage>

      <template v-slot:page>
        <LSections>
          <template v-slot:sections>

            <BreadCrumbs
                :courseName="courseName"
                :moduleName="moduleName"
            >
            </BreadCrumbs>

            <TitleAndIntro
                :title="title"
                :body="body"
            ></TitleAndIntro>

            <Image
                v-if="imageName"
                :imageName="imageName"
            ></Image>

            <ModulePreviousNextButtons></ModulePreviousNextButtons>
          </template>
        </LSections>
      </template>
    </LLandingPage>
  </div>

  <!--        navigation: breadcrumb-->
  <!--        module header: create module title and call module objectives-->
  <!--        module contents: articles-->
  <!--        nav buttons: previous next-->
  <!--        footer: footer-->
</template>

<script>
import Image from "../../Image";
import ModulePreviousNextButtons from "./ModulePreviousNextButtons";
import TitleAndIntro from "../TitleAndIntro";
import BreadCrumbs from "../../BreadCrumbs";
import LSections from "../../layoutComponents/LSections";
import LLandingPage from "../../layoutComponents/LLandingPage";
import axios from "axios";
import {ref} from "@vue/reactivity";

export default {
  name: "ModuleLanding",
  components: {
    Image,
    LLandingPage,
    LSections,
    BreadCrumbs,
    TitleAndIntro,
    ModulePreviousNextButtons,
  },
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
  setup(props) {
    const title = ref("")
    const imageName = ref("")
    const body = ref("")

    axios.get(`https://raw.githubusercontent.com/safinazbg/coursePageData/master/courses/${props.courseName}/modules/${props.moduleName}.json`)
        .then(result => {
          const module = result.data
          title.value = module.title
          title.imageName = module.imageName
        })

    axios.get(`https://raw.githubusercontent.com/safinazbg/coursePageData/master/courses/${props.courseName}/modules/${props.moduleName}.md`)
        .then(result => body.value = result.data)


    return {
      body,
      title,
      imageName,
    }
  }
}
</script>

<style scoped>

</style>
