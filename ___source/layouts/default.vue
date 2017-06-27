<template lang="pug">
div.site-container
  SiteHeader(:section="section")
  nuxt
</template>

<script>
import SiteHeader from '~components/site/Header'

export default {
  created () {
    this.section = this.$route.name || ''
  },

  components: {
    SiteHeader
  }
}
</script>

<style lang="sass">
.site-container
  background-color: #fff
  margin-left: 2rem
</style>
