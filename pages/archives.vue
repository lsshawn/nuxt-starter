<template lang="pug">
div
  ul
    li(v-for="[date, articles] in articlesByDate")
      h3 {{ date }}
      ul
        li(v-for="article in articles")
          nuxt-link(:to="article.path") {{ article.title }}
</template>

<script>
export default {
  asyncData: async ({ app, route }) => ({
    articles: await app.$content('/articles').getAll()
  }),

  computed: {
    articlesByDate () {
      const articles = new Map()
      this.articles
      .forEach(article => {
        const [year] = article.date.split('-')
        if (!articles.has(year)) articles.set(year, [article])
        else articles.get(year).unshift(article)
      })
      return [...articles].sort(([date1], [date2]) => date2 - date1)
    }
  }
}
</script>

<style lang="sass">

</style>
