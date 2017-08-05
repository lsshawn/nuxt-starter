<template lang="pug">
div.site-container(:class="layoutStyle")
  div.site-header
    a.masthead(href="/") Alid Castano
      | <span> Programming, fitness, usable psychology, and conscious growth. </span>
  div.site-content
    ul.nav
      li(v-for="path in menu")
        nuxt-link(:to="path" exact) {{ path | toTitle }}
    div.main
      nuxt
</template>

<script>
export default {
  data: () => ({
    menu: [
      '/articles',
      '/projects',
      '/about',
      '/contact'
    ]
  }),
  computed: {
    isLanding () {
      return ['/', '/articles'].indexOf(this.$route.path) > -1
    },
    layoutStyle () {
      return this.isLanding ? 'landing-container' : 'content-container'
    }
  },

  filters: {
    toTitle (path) {
      return path.charAt(1).toUpperCase() + path.replace(/\/[a-z]/, '')
    }
  }
}
</script>

<style lang="sass">
@import "../assets/sass/util.sass"

.page-enter-active, .page-leave-active
  transition: all .25s ease-out
.page-enter, .page-leave-active
  opacity: 0
  transform-origin: 50% 50%

.site-container
  height: 100vh
  padding: 1rem
  margin: 0 auto
  @media (min-width: $bp-tablet)
    margin-left: 3rem
.masthead
  color: $primary-dark
  display: block
  width: 80%
  font-weight: 600
  &:hover
    text-decoration: none
  span
    color: #82a1b0
    font-size: .9rem
    font-weight: 400
    margin-top: -1rem
    padding-left: .6rem
    @media (min-width: $bp-tablet)
      font-size: 1.025rem
.landing-container .masthead
  font-size: 3rem
  @media (min-width: $bp-tablet)
    font-size: 5rem
  span
    display: block
.content-container .masthead
  font-size: 1.5rem
  span
    display: none

.main,
.nav
  display: inline-block

.nav
  border-right: 5px solid #eff3f5
  width: 7%
  margin-top: 1.5rem
  margin-left: 1rem
  padding-left: 0
  padding-right: 1.125rem
  list-style-type: none
  text-align: right
  li:nth-child(n+2)
    margin-top: .5rem
  a
    &:hover,
      text-decoration: none
      background-color: #eff3f5
      padding: .5rem 1rem
  .nuxt-link-active
    text-decoration: none
    background-color: #eff3f5
    padding: .5rem 1rem

.content-container .nav
  display: none

</style>
