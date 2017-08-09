<template lang="pug">
div.home-footer
  p.footer-message Welcome to my online home! I come here
    |  <nuxt-link to="/articles">clarify my thoughts</nuxt-link>,
    | <nuxt-link to="/projects">record my work</nuxt-link>, and
    | <nuxt-link to="/now">establish my priorities.</nuxt-link>
    | Fundamentally, this place is mainly for me, but while you're here, I hope you find your stay worthwhile.
</template>

<style lang="sass">
@import "../assets/sass/util"

.footer-message
  border-top: 2px dashed #eff3f5
  position: relative
  top: 1rem
  padding-top: .75rem
  padding-left: 1rem
  padding-right: 1rem
  max-width: 95%
  font-size: .85rem
  @media (min-width: $bp-tablet)
    font-size: 1rem
  a
    text-decoration: underline
</style>
