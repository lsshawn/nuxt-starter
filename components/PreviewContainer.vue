<template lang="pug">
div.preview-container
  h2.preview-title  {{ title }}
  div.preview-content
    slot
  nuxt-link.see-all(v-if="seeAll" :to="seeAll.path") {{ seeAll.label }}
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
    seeAll: { type: Object }
  }
}
</script>

<style lang="sass">
.preview-container
  width: 32rem
.preview-content
  margin-top: 1rem
  margin-bottom: .25rem
  li
    padding-bottom: .5rem

.see-all
  font-size: 1.25rem
  opacity: .8
</style>
