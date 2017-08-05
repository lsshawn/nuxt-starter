<template lang="pug">
ul.recent-articles
  li(v-for="article in articles")
    nuxt-link(:to="article.path") {{ article.title }}
</template>

<script>
export default {
  asyncData: async ({ app }) => ({
    articles: await app.$content('/articles')
    .query({ exclude: 'body' })
    .getOnly(0, 5)
  })
}
</script>

<style lang="sass">
@import "../../assets/sass/util.sass"
</style>
