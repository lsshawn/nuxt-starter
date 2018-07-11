<template>
  <v-app>
    <!-- Header -->
    <v-layout row class="mb-0 back-button">
      <v-flex xs1 class="pa-0 pl-2 mr-2">
        <v-btn icon @click.native="back">
          <v-icon>keyboard_backspace</v-icon>
        </v-btn>
      </v-flex>
      <v-flex xs10 class="pa-0 pl-3">
        <h1>Back</h1>
      </v-flex>
    </v-layout>
    <app-menu></app-menu>

    <v-container fluid grid-list-lg class="mt-0 px-3 main-container">
      <v-content class="main-content">
        <nuxt/>
      </v-content>
    </v-container>

    <app-footer></app-footer>
  </v-app>
</template>

<script>
  import AppFooter from '~/components/AppFooter.vue'
  import AppMenu from '~/components/AppMenu.vue'

  export default {
    components: {
      appFooter: AppFooter,
      appMenu: AppMenu
    },
    methods: {
      back () {
        this.$router.back()
      }
    }
  }
</script>

<style scoped>
@media screen and (min-width: 566px) {
  .back-button { 
    display: none;
  }
}
</style>
