<template lang="pug">
PreviewContainer.featured-content
  div.section-container
    h2.section-label Latest Article
    section
      nuxt-link.item-link(:to="article.path") {{ article.title }}
  div.section-container
    h2.section-label Latest Project
    section
      a.item-link(:href="project.link" target="_blank")
        | {{ project.name }}: {{ project.pitch }}
</template>

<script>
import PreviewContainer from '~/components/PreviewContainer'

export default {
  asyncData: async ({ app }) => ({
    article: await app.$content('/articles').getOnly(0),
    project: (await app.$content('/projects').getOnly(0)).body[0]
  }),
  components: {
    PreviewContainer
  }
}
</script>

<style lang="sass">
@import "../../assets/sass/util"

.section-container
  width: 100%
  margin-bottom: 1.25rem
  padding-top: .5rem
  padding-left: .5rem
  vertical-align: top
  .section-label
    border-bottom: 2px solid $primary-light
    color: $primary-dark
    width: 8.5rem
    padding-bottom: -3rem
    margin-bottom: .5rem
    height: 2rem
    font-weight: 200
    font-size: 1.25rem
  .item-link
    margin-top: 0
    font-size: 1.5rem
    font-weight: 600
</style>
