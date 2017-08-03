<template lang="pug">
ContentContainer
  div.article-lead(slot="lead")
    h2.article-label Article:
    h1.article-title {{ article.title }}

  section.article-body(slot="content" v-html="article.body")

  div(slot="closer")
    img.article-image(v-if="article.image" :src="`/img/articles/${article.image}`")
    p(v-if="article.quote").article-quote {{ article.quote }}
</template>

<script>
import ContentContainer from '~/components/ContentContainer'

export default {
  asyncData: async ({ app, route }) => ({
    article: await app.$content('/articles').get(route.path)
  }),

  components: {
    ContentContainer
  }
}
</script>

<style lang="sass">
.article-lead
  max-width: 95%
  margin: 1rem auto 1.75rem auto
.article-label
  margin-left: .25rem
.article-title
  font-size: 2.75rem
  margin-top: 0
  color: #003366
.article-image
  max-width: 95%
  margin: 0 auto 1rem auto
.article-quote
  max-width: 85%
  margin: 0 auto
  color: #737373
  font-style: italic
</style>
