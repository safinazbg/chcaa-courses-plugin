<template>
  <section class="colorCard">
    <div
        class="uk-card-title uk-text-center title"
        :style="titleStyle"
    >{{ title }}
    </div>
    <div
        class="padding-h"
        :style="contentStyle"
    >
      <slot name="content">

      </slot>
    </div>
  </section>
</template>

<script>
import {ref} from "vue";

export default {
  name: "ColorCard",
  props: {
    backgroundColorContent: {
      type: String,
      default: '#fdd9b0'
    },
    backgroundColorTitle: {
      type: String,
      default: '#f6ae2d'
    },
    colorTitle: {
      type: String,
      default: 'unset'
    },
    colorContent: {
      type: String,
      default: 'unset'
    },
    title: {
      type: String,
      required: true,
    }
  },
  setup(props) {
    const titleStyle = ref({
      color: props.colorTitle,
      backgroundColor: props.backgroundColorTitle
    })
    const contentStyle = ref({
      color: props.colorContent,
      backgroundColor: props.backgroundColorContent
    })
    return {
      titleStyle,
      contentStyle
    }
  }
}
</script>

<style scoped>
.colorCard {
  align-self: stretch;
}
.padding-h {
  padding: 0 1rem;
  height: 100%;
}

</style>
