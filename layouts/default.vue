<template lang="pug">
div.site-container(:class="layoutStyle")
  div.site-header
    a.masthead(href="/") Alid Castano
      | <span class="slogan"> Programming, fitness, usable psychology, and conscious growth. </span>
  div.site-content
    ul.nav
      li(v-for="path in menu")
        nuxt-link(:to="path" exact) {{ path | toTitle }}
      li.signup
        button Subscribe
    div.main
      nuxt
  div.footer
    p.message Welcome to my online home! I come here
      |  <nuxt-link to="/articles">reflect on my thoughts</nuxt-link>,
      | <nuxt-link to="/projects">record my work</nuxt-link>, and
      | <nuxt-link to="/now">establish my priorities.</nuxt-link>
      | Fundamentally, this place is mainly for me, but while you're here, I hope you find your stay worthwhile.
</template>

<script>
export default {
  data: () => ({
    menu: [
      '/articles',
      '/projects',
      '/now',
      '/about',
      '/contact'
    ]
  }),
  computed: {
    isLanding () {
      return ['/', ...this.menu].indexOf(this.$route.path) > -1
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
  padding: 0 1rem
  margin: 0 auto
  @media (min-width: $bp-tablet)
    margin-left: 3rem

.landing-container
  height: 90vh

.site-header
  display: block
  width: 100%
  margin-top: .5rem
  text-align: center
  @media (min-width: $bp-desktop)
    margin-left: .25rem
    text-align: left
.masthead
  display: inline-block
  color: $primary-dark
  font-weight: 600
  @media (min-width: $bp-desktop)
    margin: 0
  &:hover
    text-decoration: none
  .slogan
    display: none
    @media (min-width: $bp-desktop)
      display: block
      color: #82a1b0
      font-size: 1.025rem
      font-weight: 400
      margin-top: -1.5rem
      padding-left: .6rem
      text-align: left
.landing-container .masthead
  font-size: 3.5rem
  @media (min-width: $bp-tablet)
    font-size: 5rem

.content-container .masthead
  font-size: 1.5rem
  .slogan
    display: none

.nav
  border-top: 2px dashed #eff3f5
  border-bottom: 2px dashed #eff3f5
  width: 98%
  margin-top: -.25rem
  margin-bottom: 1.25rem
  padding-top: .4rem
  padding-left: 0
  padding-bottom: .4rem
  list-style-type: none
  text-align: center
  @media (min-width: $bp-desktop)
    width: 42%
    padding-left: 1.75rem
    margin-top: .75rem
    text-align: left
  .signup
    display: none
    @media (min-width: $bp-desktop)
      display: initial
      position: relative
      top: .75rem
      left: 1rem
    button
      background-color: transparent
      color: $primary-dark
      border: none
      position: absolute
      top: -1rem
      font-size: 1.025rem
      font-family: $heading-font-family
  li
    display: inline
  li:nth-child(n+2)
    margin-left: 1.5rem
  a
    text-decoration: none
  .nuxt-link-active
    // TODO
    // text-decoration: none
    // background-color: #eff3f5
    // padding: .5rem 1rem

.content-container .nav
  display: none

.landing-container .main
  padding-left: 1rem

.landing-container .footer
  position: absolute
  bottom: 1rem
.content-container .footer
  display: none
.message
  border-top: 2px dashed #eff3f5
  padding-top: .75rem
  padding-left: 1rem
  padding-right: 1rem
  max-width: 95%
  a
    text-decoration: underline
</style>
