<template lang="pug">
div.site-container
  div.site-header
    a.site-title(href="/") Alid Castano
    ul
      li.nav-link(v-for="option in menu" :key="option")
        a(:href="`/${option}`") {{ option }}
  nuxt
</template>

<script>
export default{
  data: () => ({
    menu: [
      'articles',
      'about',
      'contact'
    ]
  })
}
</script>
<style lang="sass">
.site-header
  max-width: 95%
  margin: 0 auto 1rem auto
.site-title
  font-size: 2.5rem
  margin: 0
  color: #000
</style>
