<template lang="pug">
ContentContainer.project-archives
  div(slot="content")
    h3 Open Source Projects
    ul.project-list
      li.project-preview(v-for="project in projects")
        nuxt-link(:to="project.path") {{ project.title }}
</template>

<script>
import ContentContainer from '~/components/ContentContainer'

export default {
  asyncData: async ({ app, route }) => ({
    projects: (await app.$content('/projects')
      .getAll())
      .sort((project1, project2) => project2.weight - project1.weight)
  }),

  components: {
    ContentContainer
  }
}
</script>

<style lang="sass">
.project-group
  list-style-type: none
</style>
