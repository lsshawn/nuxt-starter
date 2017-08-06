<template lang="pug">
PreviewContainer(title="What I'm doing now")
  div(v-html="latestEntry.body")
</template>

<script>
import PreviewContainer from '~/components/PreviewContainer'

export default {
  asyncData: async ({ app }) => ({
    latestEntry: await app.$content('/now').getOnly(0)
  }),

  components: {
    PreviewContainer
  }
}
</script>
