<template>
  <section class="container">
    <h3> Books </h3>
    <nuxt-child />
  </section>
</template>

<script>
export default { // TODO dynamic route and set metadata
  asyncData: ({ route }) => {
    // const metadata = route.matched[1].components.default.$metadata || {}
    // return { ...metadata }
  }
}
</script>

<style>
</style>
