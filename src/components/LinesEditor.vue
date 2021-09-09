<template>
  <div class="linesEditor">
    <AutoSizeTextarea
        v-model="linesText"
        @input="onInput"
    ></AutoSizeTextarea>
  </div>
</template>

<script>
import {computed} from "@vue/reactivity";
import AutoSizeTextarea from "@/components/AutoSizeTextarea";

export default {
  name: "LinesEditor",
  emits: ['update'],
  props: {
    lines: {
      type: Array,
      default: ()=>[],
    }
  },
  components: {
    AutoSizeTextarea,
  },
  setup(props, {emit}) {
    const linesText = computed(() => props.lines.join('\n\n'))
    const linesToArray = lines => lines.split('\n\n')

    const onInput = lines => {
      const linesArray = linesToArray(lines)
      emit('update', linesArray)
    }

    return {
      linesText,
      onInput,
    }
  }
}
</script>

<style scoped>

</style>
