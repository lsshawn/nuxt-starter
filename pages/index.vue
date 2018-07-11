<template>
  <v-layout column justify-center>
    <v-flex xs12>
      <div v-if="post && posts.length === 0">
        <app-spinner></app-spinner> 
      </div>
      <div else>
        <v-layout row wrap>
          <v-flex xs12 sm8 offset-sm2 v-for="post in posts" :key="post.id">  
            <blog-preview
              :title="post.title"
              :excerpt="post.excerpt"
              :thumbnailUrl="post.thumbnailUrl"
              :category="post.category"
              :createdDate="post.date"
              />
          </v-flex>
        </v-layout>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import BlogPreview from '@/components/Blog/BlogPreview'
import AppSpinner from '@/components/AppSpinner'
export default {
  components: {
    appSpinner: AppSpinner,
    blogPreview: BlogPreview
  },
  asyncData: async ({ app }) => ({
    posts: await app.$content('/articles').getAll(),
    project: (await app.$content('/projects').getOnly(0)).body[0]
  })
}
</script>
