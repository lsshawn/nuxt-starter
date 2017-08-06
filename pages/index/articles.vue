<template lang="pug">
PreviewContainer(
  title="What I've been thinking about"
  :seeAll="{ path: '/archives/articles', label: 'See all articles' }"
)
  ul.articles-container
    li.article-item(v-for="article in articles")
      nuxt-link(:to="article.path") {{ article.title }}
</template>

<script>
import PreviewContainer from '~/components/PreviewContainer'

export default {
  asyncData: async ({ app }) => ({
    articles: await app.$content('/articles')
    .query({ exclude: 'body' })
    .getOnly(0, 5)
  }),
  components: {
    PreviewContainer
  }
}
</script>
