<template lang="pug">
div.site-container
  div.site-header
    a.site-title(href="/") Alid Castano
    ul.site-nav
      li.nav-link(v-for="option in menu" :key="option")
        a(:href="`/${option}`") {{ option }}
  nuxt
</template>

<script>
export default{
  data: () => ({
    menu: [
      'Archives',
      'About',
      'Contact'
    ]
  })
}
</script>
<style lang="sass">
$blueish-gray: #eff3f5#1ca5fc
.site-container
  background-color: #fffffb
  min-height: 100vh
.site-header
  // background-color: $blueish-gray
  padding: 1rem
  // max-width: 95%
  // margin: 0 auto 1rem auto
  .site-title
    display: inline-block
  .site-nav
    display: inline-block
    .nav-link
      display: inline-block
      margin-right: 1rem

.site-title
  font-size: 2.5rem
  margin: 0
  color: #003366
</style>
