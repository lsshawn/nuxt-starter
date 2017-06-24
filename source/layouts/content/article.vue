<template lang="pug">
article.article-container
  div.site-header
    h1.site-title Alid Castano

  div.article-lead
    h3.article-label Article:
    h1.article-title {{ title }}

  section.article-content(
    v-html="content"
  )

  div.article-closer
    img.article-image(:src="`img/articles/${image}`")
    p.article-quote {{ quote }}
</template>

<style lang="sass">
$container-width: 48rem
$container-shift: 4rem
$content-width: 38rem

.article-container
  max-width: $container-width
  margin-left: $container-shift
  margin-top: 2rem
  margin-bottom: 2rem

.site-header
  max-width: 95%
  margin: 0 auto
  .site-title
    font-size: 2.25rem

.article-lead
  max-width: 95%
  margin: 1rem auto 1.75rem auto
  .article-label
    margin-top: 0
    margin-left: .25rem
  .article-title
    font-size: 2.25rem
    margin-top: 0
.article-content
  max-width: $content-width
  margin: 0 2.125rem
.article-closer
  max-width: 100%
  margin: 0 auto
  .article-image
    max-width: 100%
  .article-quote
    max-width: 95%
    margin: 0 auto
    color: #737373
    font-style: italic
</style>
