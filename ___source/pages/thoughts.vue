<template lang="pug">
  div.content-container
    //- h1 {{title}}
    //- <essay />
    <nuxt-child />
</template>

<script>
// import essay from '~content/thoughts/2017-06-14-ProgrammingDonts.md'

export default {
  layout: 'projects',
  // middleware: 'contentBuild',
  //
  // // data: () => ({
  // //   title: essay.$metadata.title
  // // }),
  components: {
    // essay
  }
}
</script>

<style lang="sass">
.content-container
  position: relative
  max-width: 55rem
  min-height: 85vh
  margin-top: 2rem
  margin-left: 5%
  background: #fff
  padding: 1rem 1rem
  // margin-top: -2rem
  // z-index: 2
.content
  max-width: 45rem
  margin: 2rem auto 1rem auto
  h1
    border-bottom: 2px solid #91adba
    margin-bottom: 1rem
    // text-decoration: underline #91adba
</style>
