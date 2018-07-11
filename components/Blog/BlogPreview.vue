<template>
  <v-card flat>
    <nuxt-link :to="'/' + id" class="yellow--text text--darken-2">
      <v-card-media
        class="card-img"
        height="250px"
        :src="`http:${thumbnailUrl}`">
      </v-card-media>
    </nuxt-link>
    <!-- <v-card-text class="pb-0">
      <v-btn class="yellow darken-1 ml-0 meta-category" flat small disabled>{{ category }}</v-btn>
    </v-card-text> -->
    <v-card-title class="py-2">
      <!-- <v-layout column> -->
        <h2>{{ title }}</h2>
      <!-- </v-layout> -->
    </v-card-title>
    <v-card-text class="py-0">
      <h3 class="mb-3 grey--text darken-4">{{ subtitle }}</h3>
      <div>{{ excerpt }}</div>
      <v-btn class="yellow darken-1 ml-0 mt-3 meta-category grey--text text--darken-3" nuxt :to="'/' + id" flat small>read more</v-btn>
    </v-card-text>
    <nuxt-link :to="'/' + id" class="post-preview"></nuxt-link>
    <hr class="separator yellow mb-0">
    <div class="pl-3 py-1 grey--text lighten-1">
      <h6>
        {{ publishedDate || createdDate | prettyDate}}
        <span class="px-1 yellow--text darken-3">|</span>
        {{ category }}
      </h6>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      required: true
    },
    excerpt: {
      required: true
    },
    thumbnailUrl: {
      required: true
    },
    createdDate: {
      type: String
    },
    category: {
      type: String
    }
  }
}
</script>

<style scoped>
h2, h3 {
  margin-top: 0px;
  margin-bottom: 0px;
}

a {
  color: #333;
  text-decoration: none;
}

.card__media__background {
  background-position: bottom !important;
}

.meta-category {
  font-weight: 700;
  font-size: 0.7em;
  height: 20px;
  text-align: left;
}
</style>
