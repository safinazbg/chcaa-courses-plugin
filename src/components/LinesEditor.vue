<template>
  <div class="linesEditor">
    <AutoSizeTextarea
        v-model="linesText"
        @input="onInput"
    ></AutoSizeTextarea>
    <div class="list">
      <div class="item" v-for="(item, index) in lines" :key="index">
        {{item}}
      </div>
    </div>
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
      default: () => [
          'ásdlinsl dli Dali daásdlinsl dli Dali dal iadN ásdlinsl dli Dali dal iadN l iadN ad',
          'ásdlinsl dli Dali dal ásdlinsl dli Dali dal iadN ásdlinsl dli Dali dal iadN iadN ad',
          'ásdlinsl dli Dali dal iadN ásdlinsl dli Dali dal iadN ásdlinsl dli Dali dal iadN ad',
          'ásdlinsl dli Dali dal iadN ad',
          'ásdlinsl dli Dali dal ásdlinsl dli Dali dal iadN ásdlinsl dli Dali dal iadN iadN ad',
      ],
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
.list {
  columns: 2 auto;
}
.list * {
  margin-bottom: .5rem;
}
</style>
