<template>
  <div>
    <OrganismsSlider>
      <MoleculesSlide v-for="(slide, id) in slides" :id="id" :key="id">
        <img :src="slide" alt="slide" />
      </MoleculesSlide>
    </OrganismsSlider>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slides: [
        require('~/assets/img/result3.png'),
        require('~/assets/img/result1.png'),
        require('~/assets/img/result3.png'),
      ],
    }
  },
  methods: {
    show() {
      this.$modal.add({ title: 'Main' })
    },
  },
}
</script>
