<template lang="pug">
PreviewContainer(
  title="What I've been working on"
  :seeAll="{ path: '/projects', label: 'See all projects'}"
  )
  ul.projects-container
    li.project-item(v-for="project in projects")
      nuxt-link(:to="project.path") {{ project.title }}
</template>

<script>
import PreviewContainer from '~/components/PreviewContainer'

export default {
  asyncData: async ({ app, route }) => ({
    projects: (await app.$content('/projects')
      .query({ exclude: 'body' })
      .getAll())
      .sort((project1, project2) => project2.weight - project1.weight)
      .slice(0, 4)
  }),
  components: {
    PreviewContainer
  }
}
</script>
