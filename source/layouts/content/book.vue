<template lang="pug">
div.book-container
  div.book-intro
    img.book-image(:src="`/img/books/${image}`")
    h1 {{ title }}
    h3 by: {{ author }}
    p rating: {{ rating }}/10
    p {{ review }}

  p.content Main point: {{ directive }}

  section.book-notes.content
    h1 my notes
    div(v-html="content")
</template>

<style lang="sass">
.book-intro
  max-width: 95%
  margin: 1rem auto 1.75rem auto
  .book-image
    float: left
    max-width: 125px
    margin-right: 1rem
.book-notes
  clear: both
</style>
