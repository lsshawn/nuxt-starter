<template lang="pug">
article.article-container

  div.article-lead
    h1.article-title {{ title }}
    h3.article-description(v-if="description") {{ description }}

  section.article-content(v-html="content")

  div.article-closer
    img.article-image(:src="`img/articles/${image}`")
    p.article-quote {{ quote }}
</template>

<style lang="sass">
$container-width: 48rem
$container-shift:  4rem
$content-width: 38rem

.article-container
  margin-left: $container-shift
  max-width: $container-width
.article-lead
  max-width: $container-width
  margin: 0 auto
  text-align: center
  .article-title
    font-size: 3rem
    margin-bottom: 0
  .article-description
    font-size: 1.75
    opacity: 0.75
.article-content
  max-width: $content-width
  margin: 0 auto
.article-closer
  max-width: $container-width
  margin: 0 auto
  text-align: center
  .article-image
    max-width: 100%
</style>
