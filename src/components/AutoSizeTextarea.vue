<template>
    <textarea
        class="AutoSizeTextarea textarea"
        @input="handleInput"
        :value="modelValue"
    ></textarea>
</template>

<script>
export default {
  name: "AutoSizeTextarea",
  emits: ['input'],
  props: {
    modelValue: {
      required: false,
      type: String
    }
  },
  setup(props, {emit}) {
    function handleInput (event) {
      const textarea = event.target
      emitInput(textarea)
      resize(textarea)
    }
    const emitInput = textarea => emit('input', textarea.value)

    const resize = textarea => {
      textarea.style.height = 'auto'
      textarea.style.height = `${textarea.scrollHeight + 10}px`
    }
    return {
      handleInput,
    }
  }
}
</script>

<style scoped>
.textarea {
  width: 100%;
  resize: vertical;
  border: 2px solid #ddd;
  border-radius: 10px;
  font-size: inherit;
  outline: none;
  padding: 20px;
  min-height: 100px;
  box-sizing: border-box;
  line-height: 105%;
}
</style>
