<template lang="pug">
header.site-header(:class="[isHome ? 'home-header' : 'else-header']")
  h1.site-name(:class="[isHome ? 'home-name' : 'else-name']")
    a(href="/")
      | Alid Castano
  //- div.site-nav(:class="[isHome ? 'home-nav' : 'else-nav']")
  //-   div.nav-wrapper
  //-     transition-group.nav-links(tag="ul" name="fade" :class="{'nav-active': isToggled}")
  //-       li.nav-link(v-for="option in menu" :key="option")
  //-         a(:href="`/${option}`") {{ option }}
  //-   button.nav-button(v-if="section !== 'index'" @click="showFullMenu = !showFullMenu")
  //-     | {{ showFullMenu ? "&#9660;" : "&#9658;" }}
</template>

<script>
import config from '../../../site.config'

export default {
  props: {
    section: { type: String, required: true }
  },

  data () {
    return {
      showFullMenu: false,
      sections: config.sections
    }
  },

  computed: {
    isHome () {
      return this.section === 'index'
    },

    isFullMenu () {
      return this.isHome || this.showFullMenu
    },

    menu () {
      return this.isFullMenu ? this.sections : [this.section]
    },

    isToggled () {
      return !this.isHome && this.isFullMenu
    }
  }
}
</script>

<style lang="sass" scoped>
.fade-enter-active,
.fade-leave-active
  transition: opacity .3s

.fade-enter,
.fade-leave-to
  opacity: 0
</style>

<style lang="sass">
// general overrides
.site-name,
.nav-links
  a
    text-decoration: none
    color: inherit

// HEADER
.site-header
  position: relative
  display: flex
  flex-direction: row
  // justify-content: center
  // align-items: flex-start
  width: 90%
  // opacity: .6
  // transition: opacity 1.2s ease-in-out
  // &:hover
  //   opacity: 1
  // margin: 0 auto
  // background-color: #62899d
  // min-height: 15vh
.home-header
.else-header
  // border-bottom: 2px solid #e0e7eb

// NAME
.site-name
  min-width: 70%
  margin: 0
  // background: #62899d
  color: #45606e
  // text-align: center
  transition: font-size 2s ease
.home-name
  font-size: 4.5rem
.else-name
  font-size: 2rem

// NAV

.nav-links
  margin-right: .5rem
  list-style-type: none
.nav-link
  margin-bottom: .5rem

.site-nav
  .nav-wrapper,
  .nav-button
    display: inline-block
    vertical-align: top
  .nav-wrapper
    position: relative
    width: 60%
    margin: 0 auto
    // z-index: 1
    .nav-links
      position: absolute
      top: 1rem
      margin: 0 auto
  .nav-button
    background-color: #fff
    color: #000
    border: none
    cursor: pointer
    margin-left: 6rem
    // z-index: 100 !important
    &:focus,
      outline: 0
.else-nav
  .nav-links
    padding: 0.125rem 1rem
    background-color: #fff
    border-radius: 4px
  .nav-active
    padding: 0.5rem 1rem

</style>
