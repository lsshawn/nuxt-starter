<template lang="pug">
article.article-container
  div.article-lead
    h2.article-label Article:
    h1.title.article-title {{ title }}
  section.article-body.content(v-html="content")
  img.article-image(:src="`/img/articles/${image}`")
  p.article-quote {{ quote }}
</template>

<style lang="sass">
.article-lead
  max-width: 95%
  margin: 1rem auto 1.75rem auto
.article-label
  margin-left: .25rem
.article-title
  font-size: 2.75rem
  margin-top: 0
.article-image
  max-width: 95%
  margin: 0 auto 1rem auto
.article-quote
  max-width: 85%
  margin: 0 auto
  color: #737373
  font-style: italic
</style>
