<template>
  <AtomsModalContainer v-if="isOpen">
    <component :is="`MoleculesModal${title}`" />
  </AtomsModalContainer>
</template>

<script>
export default {
  computed: {
    isOpen() {
      return this.$store.state.modal.isOpen
    },
    title() {
      return this.$store.state.modal.title
    },
  },
}
</script>
