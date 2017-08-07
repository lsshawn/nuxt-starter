<template lang="pug">
div.site-container(:class="layoutStyle")
  div.site-header
    a.masthead(href="/") Alid Castano
      | <span class="slogan"> Programming, fitness, usable psychology, and conscious growth. </span>
  div.site-content
    ul.accordion-nav(:style="accordionStyle")
      li.nav-item(v-for="path in menu")
        nuxt-link.nav-link(:to="path" exact) {{ path | toTitle }}
      li.signup
        button(@click="toggleSignup") Subscribe
    div.main
      nuxt
  div.site-footer
    p.message Welcome to my online home! I come here
      |  <nuxt-link to="/articles">clarify my thoughts</nuxt-link>,
      | <nuxt-link to="/projects">record my work</nuxt-link>, and
      | <nuxt-link to="/now">establish my priorities.</nuxt-link>
      | Fundamentally, this place is mainly for me, but while you're here, I hope you find your stay worthwhile.

  //- hidden from page until toggled
  SignupForm(v-if="isLanding" :show="showSignup" :toggle="toggleSignup")
</template>

<script>
import SignupForm from '~/components/SignupForm'

export default {
  data: () => ({
    menu: [
      '/articles',
      '/projects',
      '/now',
      '/about',
      '/contact'
    ],
    showSignup: false
  }),
  computed: {
    isLanding () {
      return ['/', ...this.menu].indexOf(this.$route.path) > -1
    },
    layoutStyle () {
      return this.isLanding ? 'landing-container' : 'content-container'
    },
    accordionStyle () {
      if (this.$route.path === '/') {
        return {
          'border-top': '2px dashed #eff3f5',
          'border-bottom': '2px dashed #eff3f5'
        }
      } else if (this.isLanding) {
        return {
          'border-bottom': '2px dashed #eff3f5'
        }
      }
    }
  },

  filters: {
    toTitle (path) {
      return path.charAt(1).toUpperCase() + path.replace(/\/[a-z]/, '')
    }
  },

  methods: {
    toggleSignup () {
      this.showSignup = !this.showSignup
    }
  },
  components: {
    SignupForm
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
.content-container .site-header
  @include dim-effect(.7, 1)
  border-bottom: 2px solid $primary-light
  margin-top: .5rem
  margin-left: -1rem
  margin-right: -1rem
  padding-bottom: .25rem
  padding-left: 1.25rem

.masthead
  display: inline-block
  color: $primary-dark
  letter-spacing: 1px
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
      letter-spacing: initial
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

.content-container .accordion-nav
  display: none
.landing-container .accordion-nav
  width: 98%
  margin-top: -.25rem
  margin-bottom: 1.25rem
  padding-left: 0
  padding-top: .5rem
  padding-bottom: .5rem
  list-style-type: none
  text-align: center
  @media (min-width: $bp-desktop)
    width: 42%
    padding-left: .25rem
    margin-top: .75rem
    text-align: left
  .signup
    display: none
    @media (min-width: $bp-desktop)
      display: initial
      position: relative
      top: .75rem
      left: 2.8rem
    button
      background-color: transparent
      color: $primary-dark
      border: none
      position: absolute
      top: -1rem
      font-size: 1.025rem
      font-family: $heading-font-family
      outline: none
      cursor: pointer
  .nav-item
    display: inline-block
    text-align: center
  .nav-link
    padding: .7rem .5rem
    text-decoration: none
    font-size: 1.025rem
    @media (min-width: $bp-desktop)
      padding: .7rem
  .nuxt-link-active
    border-top: 2px dashed $primary-light
    border-right: 2px dashed $primary-light
    border-left: 2px dashed $primary-light
    border-bottom: 2px solid #fff

.content-container .nav
  display: none


.landing-container .main
  padding-left: 1rem

.landing-container .site-footer
  position: relative
  top: 1rem
.content-container .site-footer
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
