<template>
<div v-html='latestEntry.body'>
</div>
<!-- PreviewContainer(title="What I'm doing now") -->
</template>

<script>
// import PreviewContainer from '~/components/PreviewContainer'

export default {
  asyncData: async ({ app }) => ({
    latestEntry: await app.$content('/now').getOnly(0)
  })
}
</script>
