<template>
  <v-app>
    <div class="text-xs-center mt-2 display-1 yellow--text text--darken-2">
      <v-avatar size="70px">
        <img src="@/static/img/profile-shawn.png" alt="Sshawn">
      </v-avatar>
    </div>
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
    }
  }
</script>
 
<style>
h1, h3 {
  margin-top: 30px;
  margin-bottom: 10px;
}
</style>
