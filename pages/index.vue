<template>
  <div>
    <div class="container" />
    <AtomsButton> nnn </AtomsButton>
    <AtomsButton type="secondary" @click="show">nnn</AtomsButton>
    <AtomsButton type="small">nnn</AtomsButton>
    <AtomsButton type="small-outline">nnn</AtomsButton>
    <AtomsButton type="outline">nnn</AtomsButton>
    <AtomsButton type="inline">nnn</AtomsButton>
    <AtomsButton type="icon">nnn</AtomsButton>
    <AtomsButton type="icon-white">nnn</AtomsButton>
    <AtomsLazyLoadImage
      :url="require('~/assets/img/main.png')"
      caption="Aizhaaaaan"
    />
  </div>
</template>

<script>
export default {
  methods: {
    show() {
      this.$modal.add({ title: 'Main' })
    },
  },
}
</script>
<style scoped>
.container {
  background: red;
  height: 1000px;
  width: 100%;
}
</style>
