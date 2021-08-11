<template>
  <div
      :class="{ active: hover }"
      class="markdown raw out"
      @mouseleave="hover = false"
      @mouseover="hover = true"
  >
    <v-runtime-template
        :template="template"
    ></v-runtime-template>
  </div>
</template>

<script>
import VRuntimeTemplate from 'vue3-runtime-template'
import {computed, ref} from 'vue'
import markdownIt from "../use/markdownIt";

export default {
  name: 'RawMarkdown',
  components: {
    VRuntimeTemplate,
  },
  props: {
    payload: {
      type: String,
      default: '',
      required: true
    }
  },
  setup (props) {
    const template = computed(() => markdownIt.render(props.payload))

    const hover = ref(false)
    return {
      hover,
      template,
    }
  },
}
</script>

<style scoped>

  .markdown,
  .markdown * { width: 100% }

</style>
