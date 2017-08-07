<template lang="pug">
div.signup-container(id="mc_embed_signup" :class="formClasses")
  button.close-form(@click="closeForm") x
  h2 Join My Mailing List
  p Sign up to receive occasional updates.
  form.signup-form(
    action="//alidcastano.us16.list-manage.com/subscribe/post?u=922c2f0ea20e1c7be81225cf7&amp;id=9e22e0cf16"
    method="post"
    target="_blank"
    novalidate
  )
    input.signup-field(type="text" placeholder="Your Name" name="FNAME" value="" )
    input.signup-field(type="email" placeholder="Your Email" name="EMAIL" value="" )
    button.send-button(type="submit" name="subscribe" @click="submitForm") Sign up
</template>

<script>

export default{
  props: {
    show: { type: Boolean, required: true },
    toggle: { type: Boolean, required: true }
  },
  computed: {
    formClasses () {
      return this.show ? 'slide-up' : 'slide-down'
    }
  },
  methods: {
    closeForm () {
      this.toggle()
    }
  }
}
</script>


<style lang="sass">
@import "../assets/sass/util"

$show-bottom-pos: 42%
$hide-bottom-pos: -100%

.signup-container
  display: none
  @media (min-width: $bp-tablet)
    display: block
    border: 2px solid darken($primary-light, 10%)
    background: #fff
    box-shadow: 0 4px 5px 5px $gray-4
    width: $w-preview + 2rem
    max-width: 100%
    position: fixed
    left: 4%
    text-align: center
    border-radius: 3px
    padding: 3rem 2rem
    z-index: 2
    h2
      margin-top: 0
      font-size: 2.125rem
.signup-form
  position: relative
  .signup-field:first-child
    width: 28%
  .signup-field
    display: inline-block
    width: 40%
    margin-right: .5rem
    background: linear-gradient(to top, $primary-light, #fff 30%)
    border: 1px solid $primary-light
    font-size: 1rem
    padding: .25rem .5rem
    max-width: 100%
    border-radius: 3px
    outline: none
    cursor: text
    &:focus
      border: 1px solid $primary-dark
  .send-button
    display: inline-block
    background: $primary-light
    color: $primary-dark
    border: 1px solid $primary-dark
    border-radius: 3px
    width: 18%
    font-size: 1rem
    padding: .3rem .6rem
    cursor: pointer
    outline: none

.close-form
  background: $primary-light
  color: $primary-dark
  float: right
  position: absolute
  top: 3%
  right: 1.5%
  padding: .2rem .4rem
  line-height: 1rem
  cursor: pointer
  border: none
  border-radius: 3px
  outline: none

.slide-up
  bottom: $show-bottom-pos
  @keyframes slide-up
    0%
      bottom: $hide-bottom-pos

    100%
      bottom: $show-bottom-pos
  animation: slide-up 1s ease

.slide-down
  bottom: $hide-bottom-pos
  @keyframes slide-down
    0%
      bottom: $show-bottom-pos
    100%
      bottom: $hide-bottom-pos
    animation: slide-down 1s ease
</style>
