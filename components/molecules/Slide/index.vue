<template>
  <div :id="id" class="slide">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: [String, Number],
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.slide {
  float: left;
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 500ms linear;
}
</style>
