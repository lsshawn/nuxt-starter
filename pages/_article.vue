<template>
  <v-container fluid grid-list-lg class="ma-0 pa-0 main-container">
    <v-layout column>
      <v-flex xs12 md6 offset-md3 class="px-3">
        <h1 class="blog-title">{{ article.title }}</h1>
        <h2 class="blog-title mt-2">{{ article.subtitle }}</h2>

        <v-layout row justify-space-between>
          <v-flex xs9 md11> 
            <h5 class="mb-2 grey--text darken-4">
              <span class="px-1 yellow--text darken-3">|</span>
              Last updated: {{ article.createdDate | prettyDate}}
            </h5>
          </v-flex>
        </v-layout>
          <div id="embedded_messenger">
            <!-- <iframe id="botkit_client" name="post1" 
            src="http://localhost:3001/chat.html"
            frameBorder="0" height="300px" width="100%" background="#333">
            </iframe> -->
          </div>
          <div>
            <!-- <script src="http://localhost:3001/embed.js"></script> -->
            <!-- <script>
              var options = {}
              window.Botkit.boot(options)
            </script> -->
          </div>
      </v-flex>

      <!-- full width thumbnail -->
      <v-flex xs12>
        <div class="post-thumbnail mt-2" :style="{backgroundImage: 'url(' + article.thumbnailUrl + ')'}"></div>
        <div>
        </div>
      </v-flex>
      <!-- content -->
      <v-flex xs12 md6 offset-md3 class="px-4">
        <div v-html="article.body" class="mb-5 blog-content"></div>
        <!-- comment -->
        <h1 class="mt-5 mb-2 yellow--text text--darken-2">Comment</h1>
        <disqus ref="disqus" :shortname="disqusShortname" :identifier="disqusId"></disqus>
      </v-flex>
    </v-layout>
    <!-- social sharing -->
    <v-speed-dial
    v-model="fab"
    bottom right
    direction="top"
    fixed
    class="mb-5"
    transition="scale-transition"
    >
      <v-btn
        slot="activator"
        color="yellow darken-2"
        dark
        small
        fab
        hover
        v-model="fab"
      >
        <v-icon>share</v-icon>
        <v-icon>close</v-icon>
      </v-btn>
      <social-sharing 
      :url="`https://sshawn.com${this.$route.fullPath}`"
      :title="article.title"
      :description="article.excerpt"
      :quote="article.subtitle"
      hashtags=""
      twitter-user="sshawn"
      inline-template
      class="pl-2"
      >
        <div>
          <network network="facebook">
            <v-btn fab dark small color="blue">
              <v-icon class="pt-2">fa-facebook</v-icon>
            </v-btn>
          </network>

          <network network="twitter">
            <v-btn fab dark small color="blue lighten-1">
              <v-icon class="pt-2">fa-twitter</v-icon>
            </v-btn>
          </network>

          <network network="whatsapp">
            <v-btn fab dark small color="green">
              <v-icon class="pt-2">fa-whatsapp</v-icon>
            </v-btn>
          </network>
        </div>
      </social-sharing>
    </v-speed-dial>
  </v-container>
</template>

<script>
import Disqus from 'vue-disqus/dist/vue-disqus.vue'
import { mapGetters } from 'vuex'

export default {
  layout: 'blog',
  components: {
    Disqus
  },
  data () {
    return {
      fab: false
    }
  },
  computed: {
    ...mapGetters([
      'getAvatars'
    ]),
    disqusShortname () {
      return 'lsshawn'
    },
    disqusId () { // env used to avoid re-use from dev to production
      return `${process.env.NODE_ENV}-${this.disqusShortname}-${this.$nuxt.$route.params.postId}`
    }
  },
  methods: {
    back () {
      this.$router.back()
    }
  },
  asyncData: async ({ app, route }) => ({
    article: await app.$content('/articles').get(route.path)
  }),
  watch: {
    '$route.params.slug' (curr, old) {
      // disqus does not properly reload just based off the
      // disqusId computed property - we need to manually change it
      // when we know it should update
      this.$refs.disqus.init()
    }
  }
}
</script>

<style scoped>
.post-thumbnail {
  width: 100%;
  height: 350px;
  background-size: cover;
  background-position: center;
}

.blog-title {
  white-space: pre-line;
}

.post-thumbnail {
  background-position: bottom;
}

.blog-content >>> .img-caption {
  text-align: center;
  color: #999;
  padding-bottom: 12px;
}

.blog-content >>> h2 {
  margin-bottom: 35px !important;
  margin-top: 35px !important;
}

.blog-content >>> img {
    height: auto; 
    width: auto; 
    max-width: 100%;
    /* max-width: 300px;  */
    max-height: 300px;
    display: block;
    margin-left: auto;
    margin-right: auto;
}
</style>
