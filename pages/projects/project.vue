<template lang="pug">
ContentContainer
  h1.project-title {{ project.title }}
  section.project-body(slot="content" v-html="project.body")
</template>

<script>
import ContentContainer from '~/components/ContentContainer'

export default {
  asyncData: async ({ app, route }) => ({
    project: await app.$content('/projects').get(route.path)
  }),

  components: {
    ContentContainer
  }
}
</script>
